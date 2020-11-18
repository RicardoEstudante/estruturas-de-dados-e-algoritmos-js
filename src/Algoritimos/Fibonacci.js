const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

const tamanho = 5; // mude aqui o valor de números da sequençia que você deseja!

for (let i = 3; i < tamanho + 1; i++) {
  fibonacci[i] = fibonacci[i -1] + fibonacci[i -2];
}

for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

// Não há Zero na sequençia Fibonacci!