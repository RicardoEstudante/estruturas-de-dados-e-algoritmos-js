/* Criando Array */

// let diasDaSemana = new Array();
// diasDaSemana = new Array(7)
// diasDaSemana = new Array('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo');

let diasDaSemana = [];
diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];

/* Tamanho */

//length

let comprimento = diasDaSemana.length
console.log(`Comprimento = ${comprimento}`);

/* Percorrendo */

for (let i = 0; i < comprimento; i++) {
  console.log(diasDaSemana[i]);
}

// Percorrendo reversamente
console.log("Reverso \n")
for (let i = comprimento -1; i >= 0 ; i--) {
  console.log(diasDaSemana[i]);
}
