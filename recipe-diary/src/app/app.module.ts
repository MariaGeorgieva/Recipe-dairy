import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        //RecipeModule module first to work child routing
        AuthModule,
        RecipeModule,
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    

    ]
})
export class AppModule { }
