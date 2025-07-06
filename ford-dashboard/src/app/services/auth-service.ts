import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

export interface LoginResponse {
  success: any;
  message: string;
  token: string;
  // outros campos que sua API retornar
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // ajuste para sua API real

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.isLoggedInSubject.next(!!token);
  }

login(email: string, senha: string): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, senha })
    .pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.isLoggedInSubject.next(true);
      })
    );
}

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
