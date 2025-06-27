// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.
function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor; // Adiciona a chave e valor ao objeto
    return obj;
  }, {});
}
function objetoParaPares(obj) {
  return Object.entries(obj); // Converte o objeto em um array de pares
}
// Exemplo de uso
const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']];
const objeto = paresParaObjeto(pares);
console.log(objeto); // { nome: 'João', idade: 30, cidade: 'São Paulo' }
const paresConvertidos = objetoParaPares(objeto);
console.log(paresConvertidos); // [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]
