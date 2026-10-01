import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CarrinhoService } from '../../core/carrinho';
import { ItemCarrinho } from '../../core/models/item-carrinho';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-cesta',
  templateUrl: './cesta.html',
  styleUrl: './cesta.scss'
})
export class Cesta {
  itens$: Observable<ItemCarrinho[]>;
  total$: Observable<number>;

  constructor(private carrinhoService: CarrinhoService, private router: Router) {
    this.itens$ = this.carrinhoService.itens$;
    this.total$ = this.itens$.pipe(
      map(itens => itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0))
    );
  }

  remover(produtoId: number): void {
    this.carrinhoService.remover(produtoId);
  }

  limparCesta(): void {
    this.carrinhoService.limpar();
  }

  finalizar(): void {
    alert('Compra finalizada! (simulação — sem backend real)');
    this.carrinhoService.limpar();
    this.router.navigate(['/vitrine']);
  }
}
