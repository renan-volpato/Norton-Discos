import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map } from 'rxjs';
import { ProdutoService } from '../../core/produto';
import { CarrinhoService } from '../../core/carrinho';
import { CardProduto } from '../../shared/card-produto/card-produto';

@Component({
  imports: [CardProduto],
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.scss'
})
export class ProdutoDetalhe {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private produtoService = inject(ProdutoService);
  private carrinhoService = inject(CarrinhoService);

  produto = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => this.produtoService.buscarPorId(Number(params.get('id'))))
    ),
    { initialValue: undefined }
  );

  relacionados = computed(() => {
    const atual = this.produto();
    if (!atual) return [];

    return this.todosProdutos().filter(p =>
      p.id !== atual.id &&
      (p.artista === atual.artista || Math.floor(p.ano / 10) === Math.floor(atual.ano / 10))
    ).slice(0, 4);
  });

  private todosProdutos = toSignal(this.produtoService.listarTodos(), { initialValue: [] });

  comprar(): void {
    const produtoAtual = this.produto();
    if (produtoAtual) {
      this.carrinhoService.adicionar(produtoAtual);
      this.router.navigate(['/cesta']);
    }
  }
}