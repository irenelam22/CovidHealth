import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { pluck, map, tap } from 'rxjs/operators';
import { of, Observable, pipe, combineLatest } from 'rxjs'
import { Exercise, Image } from './models/exercise.model';


@Injectable({ providedIn: 'root' })
export class WgerService {
  private static readonly BASE_URL: string = 'https://wger.de/api/v2/';

  constructor(
    private readonly http: HttpClient,
  ) { }

  retrieve(): Observable<{ results: Exercise[] }> {
    const params = {
      language: '2',
      status: '2',
      limit: '30',
    };

    return this.http.get<{ results: Exercise[] }>(WgerService.BASE_URL + 'exercise', { params });
  }

  photo(): Observable<{ results: Image[] }> {
    return this.http.get<{ results: Image[] }>(WgerService.BASE_URL + 'exerciseimage/?is_main=True&limit=180');
  }

  process(file1: Exercise[], file2: Image[]) {
    let exerciseMap = new Map();
    for (let i of file2) {
      exerciseMap.set(i.exercise, i.image);
    }
    for (let j of file1) {
      let photo = exerciseMap.get(j.id);
      if (photo) {
        j.image = photo;
      }
      else {
        j.image = 'assets/filler.png';
      }
    }
    return file1;
  }

  fetchIds(): Observable<Exercise[]> {
    const res = pipe(pluck('results'));

    return combineLatest(
      this.retrieve().pipe(res),
      this.photo().pipe(res),
    ).pipe(
      tap(console.log),
      map(([exercises, photos], _) => this.process(exercises, photos)),
      map(exercises => exercises.map(exercise => {
        exercise.description = exercise.description
          .replace(/\<p\>/g, "\n").replace(/\<\/p\>/g, "")
          .replace(/\<ol\>/g, "").replace(/\<\/ol\>/g, "")
          .replace(/\<em\>/g, "").replace(/\<\/em\>/g, "")
          .replace(/\<li\>/g, "").replace(/\<\/li\>/g, "");
        return exercise;
      })),

    );
  }
}
