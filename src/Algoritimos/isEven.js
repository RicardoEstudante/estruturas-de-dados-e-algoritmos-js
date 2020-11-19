function isEven(x) {
    return x % 2 === 0 ? true : false;
}

const isEven2 = x => x % 2 === 0;

let numbers = Array.of(1,2,3,4);

console.log(isEven(numbers));
console.log(isEven2(numbers));