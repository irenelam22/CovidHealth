import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Recipe } from '../models/nutrition.model';
import { tap } from 'rxjs/operators'



@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {
  value: string = 'blue';
  public data: Recipe[] = [];

  constructor(
    public readonly spoonacular: SpoonacularService,
  ) { }

  ngOnInit(): void {
    this.spoonacular.getRandomRecipe().pipe(
      tap(console.log)
    ).subscribe(r => this.data = r.recipes);;
  }

  public renderQuery() {
    this.spoonacular.findByIngredients(this.value);
  }

}
