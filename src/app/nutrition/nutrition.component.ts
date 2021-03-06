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
  value: string = '';
  public data: Recipe[] = [];
  public diets = [];

  constructor(
    public readonly spoonacular: SpoonacularService,
    
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.showRandom();
  }

  // Plucks necessary information and displays random recipes
  public showRandom() {
    this.spoonacular.getRandomRecipe().pipe(
      pluck('recipes'),
      map(recipes => recipes.map(recipe => {
        recipe.diet = recipe.diets.join(", ");
        return recipe;
      },
    ))).subscribe(recipes => this.data = recipes);
  }

  // Finds recipes by ingredients
  public recipeByIngredients() {
    this.spoonacular.findByIngredients(this.value).pipe(
      tap(console.log)
    ).subscribe(r => this.data = r);
  }

  // Returns the recipe's information given the recipe's ID
  public recipeInfo(id: string) {
    this.spoonacular.getRecipe(id).pipe(
      tap(console.log)
    ).subscribe( r => this.showRecipe(r));
  }

  // Show the given recipe in a popup
  public showRecipe(recipe: Recipe) {
    this.dialog.open(RecipeOverview, {
      width: '80%',
      data: recipe,
    });
  }
}

/**
 * Displays the popup information when the user clicks on a recipe
 */
@Component({
  selector: 'recipe-overview',
  templateUrl: 'recipe-overview.html',
  styleUrls: ['recipe-overview.scss']
})
export class RecipeOverview {
  public data: Recipe[] = [];

  constructor(
    public dialogRef: MatDialogRef<RecipeOverview>,
    @Inject(MAT_DIALOG_DATA) public recipe: Recipe,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
