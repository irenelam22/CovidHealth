import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { pluck, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs'


@Injectable({providedIn: 'root'})
export class WgerService {
  private static readonly BASE_URL: string = 'https://wger.de/api/v2/';

  constructor(
    private readonly http: HttpClient,
  ) { }
  
  retrieve() {
    const params = {
      language: '2',
      status: '2',
    };

    return this.http.get(WgerService.BASE_URL + 'exercise', {params});
  }

  // Filter language

  fetchIds() {
    return this.retrieve().pipe(
      pluck('results'),
      mergeMap((e: Exercise[]) => e),
      // map((e: Exercise[]) => e.map(element => element.id)),
      // map((e: Exercise[]) => e.filter(element => element.language == 2)),
      // map(e => e.filter(element => element.status == 2)),
      map(e => of(e.id)),
    )
  }
}

interface Exercise {
  id: number,
  description: string,
  name: string,
  language: number,
  muscles: Muscle[],
  status: number,
  muscles_secondary: Muscle[],
  equipment: Equipment[],
}

interface Muscle {
  name: string,
  penguin: number,
}

interface Equipment {
  name: string,
  penguin: number,
}
