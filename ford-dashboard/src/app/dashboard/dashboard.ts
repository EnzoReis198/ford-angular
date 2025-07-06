import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Dashboard</h1>
    <p>Bem-vindo à página Dashboard!</p>
  `,
  styles: [`
    h1 {
      color: #2c3e50;
    }
  `]
})
export class DashboardComponent {}
