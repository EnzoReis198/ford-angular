import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  isSidebarOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isSidebarOpen = false;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  irParaDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
