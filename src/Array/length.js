module.exports = Array.prototype.comprimento = function (myArray) {
    let count = 0;

    for(let i = 0;;i++) {
        if(myArray[i] === undefined) {
            return count;
        }
        count++;
    }
}

let numbers = Array.of(1,2,3,4,5,6,7,8);
numbers.comprimento(numbers)
