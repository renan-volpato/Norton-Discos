import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map } from 'rxjs';
import { ProdutoService } from '../../core/produto';
import { CardProduto } from '../../shared/card-produto/card-produto';

@Component({
  imports: [CardProduto],
  selector: 'app-busca',
  templateUrl: './busca.html',
  styleUrl: './busca.scss'
})
export class Busca {
  private route = inject(ActivatedRoute);
  private produtoService = inject(ProdutoService);

  termo = toSignal(
    this.route.queryParams.pipe(map(params => params['q'] || '')),
    { initialValue: '' }
  );

  produtos = toSignal(
    this.route.queryParams.pipe(
      switchMap(params => this.produtoService.buscarPorNome(params['q'] || ''))
    ),
    { initialValue: [] }
  );
}