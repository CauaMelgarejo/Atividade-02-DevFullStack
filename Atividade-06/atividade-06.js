// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// Exemplo de uso
function soma(a, b) {
  console.log(`Calculando soma de ${a} e ${b}`);
  return a + b;
}
const memoizedSoma = memoize(soma);
console.log(memoizedSoma(2, 3)); // Calcula e retorna 5
console.log(memoizedSoma(2, 3)); // Retorna 5 do cache, sem calcular novamente
console.log(memoizedSoma(3, 4)); // Calcula e retorna 7
console.log(memoizedSoma(2, 3)); // Retorna 5 do cache novamente
console.log(memoizedSoma(3, 4)); // Retorna 7 do cache novamente
