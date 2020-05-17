import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms';
import { Recipe } from './models/nutrition.model';


@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private static readonly BASE_URL: string = 'https://api.spoonacular.com/recipes/';
  private static readonly API_KEY: string = '9b4addee68534150b74449e37c044a2d';

  constructor(
    private readonly http: HttpClient,
  ) { }

  findByIngredients(ingredientList) {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '10',
      ingredients: ingredientList,
    }

    return this.http.get<{ results: Recipe[] }>(SpoonacularService.BASE_URL + 'findByIngredients?', { params });

  }

  getSimilarRecipe(id) {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '10',
    }

    return this.http.get<{ results: Recipe[] }>(SpoonacularService.BASE_URL + id + '/similar?', { params });

  }

  getRandomRecipe() {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '10',
    }

    return this.http.get<{ results: Recipe[] }>(SpoonacularService.BASE_URL + 'random?', { params });

  }

}
