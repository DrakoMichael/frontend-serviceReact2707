"use client"
""
import { useState } from "react";

type ProductData = {
  nome: string;
  preco_unitario: number;
  descricao: string;
  estoque_atual: number;
};

export default function ProductForm() {
  const [form, setForm] = useState<ProductData>({
    nome: "",
    preco_unitario: 0,
    descricao: "",
    estoque_atual: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "preco_unitario" || name === "estoque_atual"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.15.3:3332/?token=1234", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const data = await response.json();
      console.log("Produto criado com sucesso:", data);
      alert("Produto cadastrado!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o produto.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Preço Unitário:</label>
        <input
          type="number"
          name="preco_unitario"
          value={form.preco_unitario}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Descrição:</label>
        <input
          type="text"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Estoque Atual:</label>
        <input
          type="number"
          name="estoque_atual"
          value={form.estoque_atual}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}
