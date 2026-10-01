import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  erroLogin = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]]
  });

  entrar(): void {
    if (this.form.valid) {
      const loginValido = this.authService.validarLogin(
        this.form.controls.email.value ?? '',
        this.form.controls.senha.value ?? ''
      );

      if (loginValido) {
        this.erroLogin = false;
        alert('Login realizado com sucesso!');
        this.router.navigate(['/vitrine']);
      } else {
        this.erroLogin = true;
      }
    } else {
      this.erroLogin = false;
      this.form.markAllAsTouched();
    }
  }
}