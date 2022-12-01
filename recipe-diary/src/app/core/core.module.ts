import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    // CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,

    //  SharedModule,
    // MyModule
  ],
  providers: [
    // {
    //   provide: 'Test',
    //   useValue: 'Best'
    // }
  ],
  exports: [
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }