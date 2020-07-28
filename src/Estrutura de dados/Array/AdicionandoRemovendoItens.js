let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10; // adicionando no final

numbers.push(11); // método push adiciona no final do array
numbers.push(12, 13);

// Inserindo no começo do array
Array.prototype.insertFirstPosition = function (value) { // Inserindo na primeira posiçao
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


Array.prototype.reIndex = function (myArray) { // método para arrumar o indice do array

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

// Removendo elementos de posções especificas.