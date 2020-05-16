import { Component, OnInit } from '@angular/core';
import { WgerService } from '../wger.service';

import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {

  constructor(
    private wger: WgerService,
  ) { }

  ngOnInit(): void {
    this.wger.fetchIds().subscribe(e => e.subscribe(console.log))
  }

}
