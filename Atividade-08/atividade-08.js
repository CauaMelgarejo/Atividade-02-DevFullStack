// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;
    if (!acumulador[cliente]) {
      acumulador[cliente] = 0; // Inicializa o total do cliente se não existir
    }
    acumulador[cliente] += total; // Soma o total da venda ao cliente
    return acumulador;
  }, {});
} 
// Exemplo de uso
const vendas = [
{ cliente: "João", total: 100 },
{ cliente: "Maria", total: 200 },
{ cliente: "João", total: 150 },
{ cliente: "Maria", total: 50 },    
{ cliente: "Ana", total: 300 }
];
const resultado = agruparPorCliente(vendas);
console.log(resultado); // { João: 250, Maria: 200, Ana: