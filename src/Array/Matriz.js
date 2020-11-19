let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

// percorrendo matrizes

function printMatrix(myMatrix) { // percorrendo e printando uma matrix bidimensional
  for (let i = 0; i < averageTemp.length; i++) {
    for (let j = 0; j < averageTemp[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

console.table(averageTemp) // matrix 2 x 2

// matrix 3 x 3 x 3

const matrix3x3x3 = []

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []; // precisamos inicializar cada Array

  for (let j = 0; j < 3; j++) {
      matrix3x3x3[i][j] = [];
    for (let k = 0; k < 3 ; k++) {
      matrix3x3x3[i][j][k] = i +j + k;
    }
  }
}

console.table(matrix3x3x3) // matrix 3x3x3

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}


