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


