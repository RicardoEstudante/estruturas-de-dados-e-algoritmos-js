let numbers = Array.of(1,2,3,4,5);


//length
let comprimento = numbers.length

/* Percorrendo */
for (let i = 0; i < comprimento; i++) {
  console.log(numbers[i]);
}

// Percorrendo reversamento
console.log("Reverso")
for (let i = comprimento -1; i >= 0 ; i--) {
  console.log(numbers[i]);
}
