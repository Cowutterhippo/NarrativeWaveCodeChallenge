import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nwave-commerce';
  loggedIn = false;
  constructor() {

  }

  ngOnInit() {
      //this.authservice.
  }
}