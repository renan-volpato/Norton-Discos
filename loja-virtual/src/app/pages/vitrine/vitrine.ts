import { Component, inject, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProdutoService } from '../../core/produto';
import { CardProduto } from '../../shared/card-produto/card-produto';
import { FiltroBarra, FiltroCriterios } from '../../shared/filtro-barra/filtro-barra';

@Component({
  imports: [CardProduto, FiltroBarra],
  selector: 'app-vitrine',
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.scss'
})
export class Vitrine {
  private produtoService = inject(ProdutoService);

  produtos = toSignal(this.produtoService.listarTodos(), { initialValue: [] });

  criterios = signal<FiltroCriterios>({ decada: 'todas', faixaPreco: 'todas', regiao: 'todas' });

  produtosFiltrados = computed(() => {
    const c = this.criterios();
    return this.produtos().filter(produto => {
      const decadaProduto = Math.floor(produto.ano / 10) * 10;
      const passaDecada = c.decada === 'todas' || decadaProduto === Number(c.decada);
      const passaRegiao = c.regiao === 'todas' || produto.regiao === c.regiao;
      const passaPreco =
        c.faixaPreco === 'todas' ? true :
        c.faixaPreco === 'ate100' ? produto.preco <= 100 :
        c.faixaPreco === '100a150' ? produto.preco > 100 && produto.preco <= 150 :
        produto.preco > 150;
      return passaDecada && passaRegiao && passaPreco;
    });
  });

  onFiltroChange(novosCriterios: FiltroCriterios): void {
    this.criterios.set(novosCriterios);
  }
}