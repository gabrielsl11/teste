// Sequência de Finobacci

function fibonacci(n) {
  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence.slice(0, n);
}

const n = 10;
console.log(fibonacci(n));

// Verificador de A

function countLetterA(inputString) {
  const regex = /a/gi;
  const matches = inputString.match(regex);
  const count = matches ? matches.length : 0;
  return count;
}

const stringToCheck = "ALFABETO.";
const count = countLetterA(stringToCheck);

if (count > 0) {
  console.log(`A letra 'a' ocorre ${count} vezes na string.`);
} else {
  console.log("A letra 'a' não foi encontrada na string.");
}

// 3) 77.

// 4)

// a) 9
// b) 128
// c) 49
// d) 100
// e) 13
// f) 20

// 5)

// Ligar o interruptor A e deixá-lo ligado por 5 a 10 minutos.
// Desligar o interruptor A e ligar o interruptor B.
// Ir até as salas das lâmpadas:
// Se a lâmpada estiver acesa, ela é controlada pelo interruptor B.
// Se a lâmpada estiver apagada:
//      Se estiver quente, ela é controlada pelo interruptor A.
//      Se estiver fria, ela é controlada pelo interruptor C.