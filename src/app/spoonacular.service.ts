import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl } from '@angular/forms';
import { Recipe } from './models/nutrition.model';


@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private static readonly BASE_URL: string = 'https://api.spoonacular.com/recipes/';
  private static readonly API_KEY: string = '';

  constructor(
    private readonly http: HttpClient,
  ) { }

  /* 
  Given a list of ingredients, find recipes by ingredients
  Also sets the API key and the number of displayed results (currently set to 3 to prevent exceeded the API's daily capacity)
  */
  findByIngredients(ingredientList) {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '3',
      ingredients: ingredientList,
    }

    return this.http.get< Recipe[]>(SpoonacularService.BASE_URL + 'findByIngredients?', { params });

  }

  // Returns similar recipes given the current recipe's ID (currently displays 3)
  getSimilarRecipe(id) {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '3',
    }

    return this.http.get<Recipe[] >(SpoonacularService.BASE_URL + id + '/similar?', { params });

  }

  // Returns random recipes (currently displays 3)
  getRandomRecipe() {
    const params = {
      apiKey: SpoonacularService.API_KEY,
      number: '3',
    }

    return this.http.get<{ recipes: Recipe[] }>(SpoonacularService.BASE_URL + 'random?', { params });

  }

  // Returns the information of a given recipe (e.g. dietary information, recipes)
  getRecipe(id) {
    const params = {
      apiKey: SpoonacularService.API_KEY,
    }
    return this.http.get<Recipe>(SpoonacularService.BASE_URL + id + '/information?', {params});

  }

}
