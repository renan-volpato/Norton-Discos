import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FiltroCriterios {
  decada: string;
  faixaPreco: string;
  regiao: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-filtro-barra',
  templateUrl: './filtro-barra.html',
  styleUrl: './filtro-barra.scss'
})
export class FiltroBarra {
  @Output() filtroChange = new EventEmitter<FiltroCriterios>();

  decada = 'todas';
  faixaPreco = 'todas';
  regiao = 'todas';

  emitirFiltro(): void {
    this.filtroChange.emit({
      decada: this.decada,
      faixaPreco: this.faixaPreco,
      regiao: this.regiao
    });
  }
}