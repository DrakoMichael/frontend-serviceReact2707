'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../models/productModel';

export function ListAll() {
  const [dados, setDados] = useState<Array<Product>>([]);

  useEffect(() => {
    async function fetchDados() {
      try {
        const resposta = await axios.get('http://192.168.15.3:3332/listarProdutos?token=1234');
        setDados(resposta.data);
        console.log('Dados recebidos:', resposta.data as Array<Product>);
      } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
      }
    }

    fetchDados();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {dados.map((produto) => (
          <li key={produto.id_produto}>
            <hr />
            <strong>{produto.nome}</strong> - R$ {produto.preco_unitario.toFixed(2)}<br />
            Estoque: {produto.estoque_atual} unidades<br />
            {produto.descricao && <span>Descrição: {produto.descricao}</span>}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
