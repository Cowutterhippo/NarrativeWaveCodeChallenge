import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ecomMaterialModule } from './material-module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [		
    AppComponent,
      NavBarComponent,
      ContainerComponent,
      LandingPageComponent
   ],
  imports: [
    ecomMaterialModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
