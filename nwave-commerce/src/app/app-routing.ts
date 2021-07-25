import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path: 'catalog',
    }, 
    {
        path: 'login',
    },
    {
        path: '**',
        redirectTo: '/catalog'
    }
]