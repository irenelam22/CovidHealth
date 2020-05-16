import { Component, OnInit } from '@angular/core';
import { WgerService } from '../wger.service';

import { tap } from 'rxjs/operators'

import { Exercise } from '../models/exercise.model';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {
  public data: Exercise[] = [];

  constructor(
    public readonly wger: WgerService,
  ) { }

  ngOnInit(): void {
    console.log('Start');
    this.wger.fetchIds().pipe(
      tap(console.log)
    ).subscribe((e: Exercise[]) => this.data = e);
  }
}
