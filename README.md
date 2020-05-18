# CovidHealth

Amidst the Coronavirus epidemic, this site is meant to alleviate a bit of the day to day difficulties regarding health and fitness. In particular, we plan around your fitness goals and work with the food already in your refrigerator. By catering to your needs, our goal is to make you less stressed and more organized :)

Uses [wger API](https://wger.de/en/software/api) and [Spoonacular API](https://spoonacular.com/food-api), created for [DALI Lab's API Challenge](https://github.com/dali-lab/dali-challenges/blob/master/docs/APIChallenge.md).

## Launch Instructions

### Needed: ###

* Node -- see installation details [here](https://nodejs.org/en/download/)

### Launch: ###

1. You will need to sign up on Spoonacular for an API key. You can do so for free [here](https://spoonacular.com/food-api/console#Dashboard)

2. Clone this repository in your favorite location:

`git clone git@github.com:irenelam22/CovidHealth.git`

3. Install necessary dependencies using `npm install`

3. Navigate to `spoonacular.service.ts` by entering the following code:

`cd CovidHealth/src/app`

4. Open `spoonacular.service.ts` and insert your API key in the empty string next to `API_KEY`:

`  private static readonly API_KEY: string = 'REPLACE_WITH_YOUR_API_KEY_HERE';`

5. Run the application!

`ng s --open`

This should automatically open a webpage at `localhost:4200`. Peruse at your leisure and enjoy!

## Features:

### Fitness

The fitness portion provides a list of numerous exercises depending on the equipment you have at home (e.g. barbells, gym mat). Each exercise provides instructions on how to accomplish the workout.

![Fitness page](https://github.com/irenelam22/CovidHealth/blob/master/src/assets/fitness.png)

### Nutrition

The nutrition portion allows the user to search up recipes based on readily available foods within their fridge. The website will then generate recipes based on the ingredient list, and detail the amount of ingredients used and missing from the user's list.

![Searching for ingredients](https://github.com/irenelam22/CovidHealth/blob/master/src/assets/ingredients.png)

The user can also choose to randomize their search to discover a variety of recipes. Each recipe is tagged with the source it came from, dietary restrictions if any (e.g. vegan, pescatarian, dairy free), and a quick summary of the dish's nutritional value, rating, and what the dish has to offer. Links in the summary are also available for the user to search similar recipes.

![Random recipe](https://github.com/irenelam22/CovidHealth/blob/master/src/assets/random.png)

Clicking on any recipe will display a popup with more information about the recipe, including serving size and detailed instructions on how to cook the recipe. 

![Recipe information](https://github.com/irenelam22/CovidHealth/blob/master/src/assets/popup.png)

### Recommendations

In the recommendations section, the user simply needs to fill out a quick survey regarding their dietary restrictions and home equipment, and the website will generate a workout and recipe based on the user's response.

![Survey](https://github.com/irenelam22/CovidHealth/blob/master/src/assets/recommendations.png)