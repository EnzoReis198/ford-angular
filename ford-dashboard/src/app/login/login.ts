import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Ajuste o caminho abaixo conforme a localização real do arquivo auth.service.ts
import { AuthService, LoginResponse } from '../services/auth-service'; // ✅ Import necessário
import { Router } from '@angular/router'; // ✅ Import necessário

// Remova esta interface duplicada e importe a correta do AuthService
// import { LoginResponse } from './services/auth-service'; // Descomente se necessário

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  senha = '';
  autoLogin = false;
  mostrarSenha = false;
  mensagem = '';
  carregando = false;

  constructor(private authService: AuthService, private router: Router) {} // ✅ Injetando corretamente o Router

toggleMostrarSenha() {
  this.mostrarSenha = !this.mostrarSenha;
}


  fazerLogin() {
    if (!this.email || !this.senha) {
      this.mensagem = 'Por favor, preencha todos os campos';
      return;
    }
    this.carregando = true;
    this.authService.login(this.email, this.senha).subscribe(
      (res: LoginResponse) => {
        this.carregando = false;
        if (res.success) {
          this.mensagem = res.message;
          if (this.autoLogin && res.token) {
            localStorage.setItem('token', res.token);
          }
          this.router.navigate(['/home']); // ✅ Aqui funciona agora
        } else {
          this.mensagem = 'Usuário ou senha inválidos';
        }
        this.email = '';
        this.senha = '';
      },
      (err: { error: { message: string; }; }) => {
        this.carregando = false;
        this.mensagem = err.error?.message || 'Erro no login';
        this.email = '';
        this.senha = '';
      }
    );
  }
}
