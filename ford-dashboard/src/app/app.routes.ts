import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { LoggedInGuard } from './LoggedInGuard';

export const routes: Routes = [
{
  path: 'login',
  loadComponent: () => import('./login/login').then(m => m.LoginComponent),
  canActivate: [LoggedInGuard]
},
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
