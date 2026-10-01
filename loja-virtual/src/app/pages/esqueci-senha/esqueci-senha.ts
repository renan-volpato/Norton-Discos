import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.scss'
})
export class EsqueciSenha {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  enviar(): void {
    if (this.form.valid) {
      alert('Instruções de recuperação enviadas para o email informado (simulação).');
      this.router.navigate(['/login']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
