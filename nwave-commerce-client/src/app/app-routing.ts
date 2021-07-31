import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing-page/landing-page.module').then(m=>m.LandingPageModule)

  },
  {
      path: '**',
      redirectTo: 'landing'
  }
]
