import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  loginFormErrors: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { 
      this.loginFormErrors = {
        email   : {},
        password: {}
      };
  }

  ngOnInit() {
    this.createLoginForm();
    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginFormValuesChanged()
  {
      for ( const field in this.loginFormErrors )
      {
          if ( !this.loginFormErrors.hasOwnProperty(field) )
          {
              continue;
          }

          // Clear previous errors
          this.loginFormErrors[field] = {};

          // Get the control
          const control = this.loginForm.get(field);

          if ( control && control.dirty && !control.valid )
          {
              this.loginFormErrors[field] = control.errors;
          }
      }
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    // this.store.dispatch(new AuthActions.Login(this.loginForm.value));
  }

  reroute() {
    this.dialog.open(RegisterComponent, {
      width: '384px'
    });
  }
}
