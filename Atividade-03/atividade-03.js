// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.
function palavrasUnicas(frase) {
  const palavras = frase.split(' ');
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (!unicas.includes(palavra)) {
      unicas.push(palavra);
    }
  }

  return unicas;
}  
// Exemplo de uso
const frase = "olá olá mundo mundo";
const resultado = palavrasUnicas(frase);
console.log(resultado); // ["olá", "mundo"]
const frase1 = "Mais pra Ti;"
const resultado1 = palavrasUnicas(frase1);
console.log(resultado1); // ["Mais", "pra", "Ti;"]
