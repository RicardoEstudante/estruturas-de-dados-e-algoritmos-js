Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i -1];
    }
    this[0] = value;
}

let numbers = Array.of(1,2,3,4,5);
console.log(numbers);

numbers.insertFirstPosition(0);
console.log(numbers);

 // método Unshift insere no começo.
 numbers.unshift(-1, -2);
console.log(numbers);
