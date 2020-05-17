import { Component, OnInit, Inject } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Recipe } from '../models/nutrition.model';
import { tap, map, pluck } from 'rxjs/operators'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {
  value: string = 'Apple';
  public data: Recipe[] = [];
  public diets = [];

  constructor(
    public readonly spoonacular: SpoonacularService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.spoonacular.getRandomRecipe().pipe(
      // tap(console.log),
      pluck('recipes'),
      map(recipes => recipes.map(recipe => {
        recipe.diet = recipe.diets.join(", ");
        return recipe;
      },
      tap(console.warn),
    ))).subscribe(recipes => this.data = recipes);
  }

  public recipeByIngredients() {
    this.spoonacular.findByIngredients(this.value).pipe(
      tap(console.log)
    ).subscribe(r => this.data = r);
  }

  public recipeInfo(id: string) {
    this.spoonacular.getRecipe(id).pipe(
      tap(console.log)
    ).subscribe((r: Recipe) => this.data = [r]);
  }

  public showRecipe(recipe: Recipe) {
    this.dialog.open(RecipeOverview, {
      width: '80%',
      data: { recipe }
    });

  }

}
@Component({
  selector: 'recipe-overview',
  templateUrl: 'recipe-overview.html',
  styleUrls: ['recipe-overview.scss']
})
export class RecipeOverview {
  public data: Recipe[] = [];

  constructor(
    public dialogRef: MatDialogRef<RecipeOverview>,
    @Inject(MAT_DIALOG_DATA) public recipe,
  ) {
    // recipe = recipe.recipe;
    console.warn(recipe)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
