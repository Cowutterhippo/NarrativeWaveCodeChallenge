import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth/_services/authentication.service';
import { Router } from '@angular/router';
import { ITokenPayload } from 'src/app/auth/_models/auth-interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: ITokenPayload = {
    email: '',
    password: ''
  };

  loginForm : FormGroup;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(['', Validators.required, Validators.email]),
      password: new FormControl(['', Validators.required])
    })

  }

  login() {
    const credentials = Object.assign({}, this.loginForm.value)
    this.auth.login(credentials).subscribe(() => {
      this.router.navigateByUrl('/catalog');
    }, (err) => {
      console.error(err);
    });
  }
}
