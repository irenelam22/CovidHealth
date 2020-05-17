import { Component, OnInit, Inject } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Recipe } from '../models/nutrition.model';
import { tap } from 'rxjs/operators'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {
  value: string = 'Apple';
  public data: Recipe[] = [];

  constructor(
    public readonly spoonacular: SpoonacularService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.spoonacular.getRandomRecipe().subscribe(r => this.data = r.recipes);
  }

  public renderQuery() {
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
