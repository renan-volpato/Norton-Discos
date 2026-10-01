import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './models/produto';
import { ItemCarrinho } from './models/item-carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itensSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  itens$ = this.itensSubject.asObservable();

  adicionar(produto: Produto, quantidade: number = 1): void {
    const itensAtuais = this.itensSubject.value;
    const itemExistente = itensAtuais.find(i => i.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
      this.itensSubject.next([...itensAtuais]);
    } else {
      this.itensSubject.next([...itensAtuais, { produto, quantidade }]);
    }
  }

  remover(produtoId: number): void {
    const itensAtuais = this.itensSubject.value.filter(i => i.produto.id !== produtoId);
    this.itensSubject.next(itensAtuais);
  }

  limpar(): void {
    this.itensSubject.next([]);
  }

  obterTotal(): number {
    return this.itensSubject.value.reduce(
      (total, item) => total + item.produto.preco * item.quantidade, 0
    );
  }
}