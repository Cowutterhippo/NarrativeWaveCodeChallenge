import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule } from '@angular/material/checkbox';

import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../auth/_services/authentication.service';

@NgModule({
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    LandingPageComponent
  ]
})

export class LandingPageModule { }
