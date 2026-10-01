export interface Produto {
  id: number;
  nome: string;
  artista: string;
  preco: number;
  imagem: string;
  descricao?: string;
  ano: number;
  regiao: 'Nacional' | 'Internacional';
  faixas?: string[];
}