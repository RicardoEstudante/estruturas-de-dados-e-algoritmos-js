/*Tipos dados em Javascript*/

// Primitivos - null, undefined, string, number, boolean, symbol.
// Derivados/Objetos - Objetos, Funções, Arrays, Expressões regulares.

/*  Tipos de variaveis */
// Number
// String
// Boolean
// Object
// Undefined
// Null
// Function

/* palavras reservadas usadas para declarar variaveis */

// var
// let
// const



/* Exemplos */

var num       = 1; // number
num2          = 2; // var não é obrigatório
var price     = 1.5; // number decimal
var myName    = 'Packt'; // string
var trueValue = true; // boolean
var nullVAr   = null; // null
var undefined; // undefined;

// o Valor null quer dizer sem valor,
// o valor undefined quer dizer ainda não recebeu valor.



/* Espoco das variáveis */

// Escopo refere-se ao local em que podemos acessar a variavel no algoritmo,
// variaveis podem ser Globais ou Locais.

var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
  var myVariable = 'local';
  return myVariable;
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); // Global pois foi declarada no escopo global.
console.log(myFunction()); // Local pois foi declarada dentro da função.
console.log(myOtherVariable); // Global pois foi declarada no escopo global.
console.log(myOtherFunction()); // Local pois não usamos var e referenciamos uma variavel existente no escopo global e mudamos o valor dela.
console.log(myOtherVariable); // Local pois usamos a função para mudar o valor da variavel de modo global.

// Evite usar variaveis Globais




