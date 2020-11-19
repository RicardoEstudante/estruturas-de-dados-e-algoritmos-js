function printMatrix(myMatrix) { // percorrendo e printando uma matrix bidimensional
    for (let i = 0; i < averageTemp.length; i++) {
        for (let j = 0; j < averageTemp[i].length; j++) {
          console.log(myMatrix[i][j]);
        }
    }
}

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

console.log("Matriz 2X2")
printMatrix(averageTemp)
console.table(averageTemp) // matrix 2 x 2
