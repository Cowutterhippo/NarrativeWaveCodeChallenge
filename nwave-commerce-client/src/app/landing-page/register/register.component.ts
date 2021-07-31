import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from '../../auth/_services/authentication.service';
import { ITokenPayload } from '../../auth/_models/auth-interface';

// import { AuthService } from '../../_services/nswag';
// import { AlertifyService } from 'app/_services/alertify.service';
// import { ErrorService } from 'app/_services/error.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  user: any;
  registerForm: FormGroup;

  credentials: ITokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    // private alertify: AlertifyService,
    // private eService: ErrorService,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(['', Validators.required, Validators.email]),
      name: new FormControl(['', Validators.required]),
      password:  new FormControl(['', Validators])
    });
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl(['', Validators.required]),
    //   lastName: new FormControl(['', Validators.required]),
    //   email: new  FormControl(['', [Validators.required, Validators.email]]),
    //   companyName: new FormControl(['', Validators.required]),
    //   password: new FormControl([
    //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
    //       Validators.minLength(8)
    //     ]
    //   ]),
    //   confirmPassword: new FormControl([
    //     '',
    //     Validators.required
    //   ])
    // }, new FormControl({ validator: this.passwordMatchValidator( 'password', 'confirmPassword') }));
  }

  ngOnInit() {
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
       return password === confirmPassword ? null : { 'mismatch': true };
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);

      delete this.user.confirmPassword;
      this.authService.register(this.user).subscribe((response) => {
        // this.alertify.alert(
        //   'Email Confirmation Sent',
        //   'We have sent you a confirmation email.  Please check your email and click the link provided to confirm your registration',
        //   () => { }
        // );
      }, error => {
        // this.alertify.error(`${error.message} Please Try Again`);
        // this.eService.handleError(error).subscribe(eMessage => { console.error(eMessage) });
      })
    }
  }

}
