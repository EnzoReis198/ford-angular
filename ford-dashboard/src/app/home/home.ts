import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // IMPORTANTE para *ngIf
import { AuthService } from '../services/auth-service';
import { RouterModule } from '@angular/router';  // IMPORTAR aqui

@Component({
  selector: 'app-home',
  standalone: true,   // <--- importante
  imports: [CommonModule, RouterModule],  // <--- importante para usar *ngIf, *ngFor, etc
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  isSidebarOpen = false;
  carregando = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isSidebarOpen = false;

    setTimeout(() => {
      this.carregando = false;
    }, 2500);
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  irParaDashboard(): void {
    this.router.navigate(['/dashboard']);
    this.toggleSidebar();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
