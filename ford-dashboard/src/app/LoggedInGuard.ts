import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('token');
    if (isAuthenticated) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
