import { Component } from '@angular/core';
import { AuthenticationService } from './auth/_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nwave-commerce';
  loggedIn = false;
  constructor(
    private authService: AuthenticationService
  ) {

  }

  ngOnInit() {
     this.loggedIn = this.authService.isLoggedIn();
  }
}
