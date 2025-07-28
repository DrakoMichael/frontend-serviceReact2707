export interface Product {
  id_produto: number;
  nome: string;
  preco_unitario: number;
  descricao?: string;
  estoque_atual: number;
}
