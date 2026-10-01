import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpfValidator } from '../../core/validators/cpf.validator';
import { senhasIguaisValidator } from '../../core/validators/senhas-iguais.validator';
import { AuthService } from '../../core/auth.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    confirmaSenha: ['', [Validators.required]],
    cpf: ['', [Validators.required, cpfValidator()]],
    telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]]
  }, {
    validators: senhasIguaisValidator('senha', 'confirmaSenha')
  });

  cadastrar(): void {
    if (this.form.valid) {
      this.authService.salvarUsuario({
        nome: this.form.controls.nome.value ?? '',
        email: this.form.controls.email.value ?? '',
        senha: this.form.controls.senha.value ?? '',
        cpf: this.form.controls.cpf.value ?? '',
        telefone: this.form.controls.telefone.value ?? ''
      });
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}