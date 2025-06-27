// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.
function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}  
// Exemplo de uso
const log = () => console.log("Função executada!");
const debouncedLog = debounce(log, 1000);
// Chame debouncedLog várias vezes em um curto período
debouncedLog();
debouncedLog();
debouncedLog();
// Apenas a última chamada será executada após 1 segundo
setTimeout(() => {
  debouncedLog();
}, 1500); // Executa após 1.5 segundos
