import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  showForm = false;
  fuseSettings: any;


  constructor(
    private platform: Platform,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
    this.showLoginDialog();
  }

  showLoginDialog() {
    this.route.queryParamMap.subscribe(response => {
      const confirmationKey = (response as any).params['confirmationKey'];
      if ((response as any).params['invited']) {
        this.dialog.open(LoginComponent, {
          width: '384px',
          data: { confirmationKey: confirmationKey }
        });
      } else if ((response as any).params['confirmationKey']) {
        this.dialog.open(LoginComponent, {
          width: '384px'
        });
      }
    });
  }

  openDialog($event: any) {
    const formType: any =
      $event.formType === 'Login' ? LoginComponent : RegisterComponent;

    this.dialog.open(formType, {
      width: '384px'
    });
  }
}
