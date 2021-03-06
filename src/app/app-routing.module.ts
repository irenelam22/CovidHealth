import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FitnessComponent } from './fitness/fitness.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { RecommendationComponent } from './recommendation/recommendation.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fitness', component: FitnessComponent},
  { path: 'nutrition', component: NutritionComponent},
  { path: 'recommendation', component: RecommendationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
