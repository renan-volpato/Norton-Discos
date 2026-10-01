import { Injectable } from '@angular/core';

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly chaveUsuario = 'vinilshop-usuario';

  salvarUsuario(usuario: Usuario): void {
    localStorage.setItem(this.chaveUsuario, JSON.stringify(usuario));
  }

  validarLogin(email: string, senha: string): boolean {
    const usuarioSalvo = localStorage.getItem(this.chaveUsuario);

    if (!usuarioSalvo) {
      return false;
    }

    const usuario = JSON.parse(usuarioSalvo) as Usuario;
    return usuario.email.toLowerCase() === email.trim().toLowerCase()
      && usuario.senha === senha;
  }
}