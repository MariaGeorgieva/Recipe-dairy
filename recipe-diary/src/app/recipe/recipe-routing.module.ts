import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

const routes: Routes = [
  {
    path: 'recipe',
    children: [
      {
        path: 'main',
        component: RecipeMainComponent
      },
      {
        path: 'edit',
        component: EditRecipeComponent
      },
      {
        path: 'new',
        component: NewRecipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
