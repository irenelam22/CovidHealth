import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FitnessComponent } from './fitness/fitness.component';
import { HttpClientModule } from '@angular/common/http'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NutritionComponent } from './nutrition/nutrition.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    FitnessComponent,
    NutritionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
