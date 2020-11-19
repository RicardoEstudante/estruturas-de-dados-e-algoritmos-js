function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

let numbers = Array.of(5,4,3,2,1);

console.log(numbers.sort(compare));

