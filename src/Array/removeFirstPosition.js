 let reIndex = require('./reIndex');
 let comprimento = require('./length');

Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length ; i++) {
      this[i] = this[i + 1];
    }
    return this.reIndex(this);
  };

let numbers = Array.of(1,2,3,4,5,6);

console.log(numbers);
console.log("removeFirstPosition");
console.log(numbers.removeFirstPosition());
