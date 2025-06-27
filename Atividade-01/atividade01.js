// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  // Dias por mês, índice 0 é janeiro
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verifica se é ano bissexto e ajusta fevereiro
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    diasPorMes[1] = 29;
  }

  return dia <= diasPorMes[mes - 1];
}
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(31, 12, 2023)); // true
console.log(ehDataValida(0, 1, 2023)); // false (dia inválido)
