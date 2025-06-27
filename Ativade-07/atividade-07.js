// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.
function mapearEOrdenarPorPreco(produtos) {
  return [...produtos] // Faz uma cópia para não modificar o array original
    .sort((a, b) => a.preco - b.preco) // Ordena por preço crescente
    .map(produto => produto.nome); // Extrai apenas os nomes
}

// Exemplo de uso
const produtos = [
  { nome: "Produto A", preco: 30 },
  { nome: "Produto B", preco: 20 },
  { nome: "Produto C", preco: 50 },
  { nome: "Produto D", preco: 10 }
];

const resultado = mapearEOrdenarPorPreco(produtos);
console.log(resultado); // ["Produto D", "Produto B", "Produto A", "Produto C"]