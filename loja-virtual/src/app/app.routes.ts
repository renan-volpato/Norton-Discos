import { Routes } from '@angular/router';
import { Vitrine } from './pages/vitrine/vitrine';
import { ProdutoDetalhe } from './pages/produto-detalhe/produto-detalhe';
import { Cesta } from './pages/cesta/cesta';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { EsqueciSenha } from './pages/esqueci-senha/esqueci-senha';
import { Busca } from './pages/busca/busca';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'vitrine', component: Vitrine },
  { path: 'produto/:id', component: ProdutoDetalhe },
  { path: 'cesta', component: Cesta },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'esqueci-senha', component: EsqueciSenha },
  { path: 'busca', component: Busca }
];