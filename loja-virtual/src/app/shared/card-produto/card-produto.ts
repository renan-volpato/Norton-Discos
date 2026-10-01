import { Component, Input, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Produto } from '../../core/models/produto';
import { CarrinhoService } from '../../core/carrinho';

@Component({
  imports: [RouterLink],
  selector: 'app-card-produto',
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.scss'
})
export class CardProduto {
  @Input({ required: true }) produto!: Produto;

  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

  comprar(): void {
    this.carrinhoService.adicionar(this.produto);
    this.router.navigate(['/cesta']);
  }
}