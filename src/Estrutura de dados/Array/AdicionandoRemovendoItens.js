let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10; // adicionando no final

numbers.push(11); // método push adiciona no final do array
numbers.push(12, 13);

// Inserindo no começo do array
Array.prototype.insertFirstPosition = function (value) { // Inserindo na primeira posição
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

numbers.insertFirstPosition(-1);

numbers.unshift(-2); // método Unshift insere no começo.
numbers.unshift(-4, -3);

/* Removendo Elementos*/

numbers.pop(); // método pop remove do final do array


Array.prototype.reIndex = function (myArray) { // método para arrumar o índice do array

  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray
}

Array.prototype.removeFirstPosition = function () { // método para remover do começo e arrumar o index
  for (let i = 0; i < this.length ; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this)
}

numbers.unshift(); // método que remove do começo.


// Removendo elementos de posições especificas.
numbers.splice(5,3); // método splice remove especificando posição/índice
// numbers[5]  - removido
// numbers[6]  - removido
// numbers[7]  - removido



// Assim como em arrays e objetos JavaScript,
// o operador delete também pode ser usado para remover um elemento de um array,
// por exemplo, delete numbers[0].
// No entanto, a posição 0 do array terá o valor undefined,
// ou seja, será o mesmo que executar numbers[0] = undefined,
// e teríamos de reindexar o array.
// Por esse motivo, devemos sempre usar os métodos splice,
// pop ou shift para remover elementos.
// (Groner, Loiane. Estruturas de dados e algoritmos com JavaScript . Novatec Editora. Edição do Kindle).

numbers.splice(5, 0 , 1, 2, 3);
// splice também adiciona se passar-mos o segundo elemento com 0,
// e o terceiro argumento informando o valor a ser adicionado no índice informado no primeiro parâmetro.