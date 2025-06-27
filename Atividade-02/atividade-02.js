// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

 // 1. Gerar número aleatório de 1 a 100
    const prompt = require('prompt-sync')();
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // 2. Contador de tentativas
    let tentativas = 0;

    // 3. Loop até acertar
    let chute = null;
    while (chute !== numeroSecreto) {
      chute = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
      tentativas++;

      // 4. Dicas
      if (chute < numeroSecreto) {
        console.log("Mais alto!");
      } else if (chute > numeroSecreto) {
        console.log("Mais baixo!");
      } else {
        console.log("Parabéns! Você acertou em " + tentativas + " tentativas.");
      }
    }