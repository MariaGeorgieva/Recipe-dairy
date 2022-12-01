import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    RecipeMainComponent,
    RecipeListComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    RecipeDetailsComponent,

  ],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
