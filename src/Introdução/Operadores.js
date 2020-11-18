/*  tipos de operadores */

// - Aritméticos (+,*,/,+, %, **)
// - Atribuição (=, +=, -=, *=, /=, %=)
// - Comparação (<,>, ==, ===, !=, !==, <=, >=)
// - Lógicos (||, !, &&)
// - bit a bit (bitwise) (&, |, ^, ~) == (And, or, Not, Xor)
// - Deslocamento bit a bit ( <<, >>, >>>)
// - Unários (++, --)

var num = 0;    // atribuição
num = num + 2;  // aritmético
num = num - 2;  // aritmético
num = num / 2;  // aritmético
num++;          // unário
num--;          // unário
num += 1;       // atribuição de soma
num -= 2;       // atribuição de subtração
num *= 3;       // atribuição de multiplicação
num /= 3;       // atribuição de divisão
num %= 3;       // atribuição de resto

/* Outros Operadores */

// TypeOf - devolve o tipo da variável ou expressão.
console.log(typeof num);
console.log(typeof 'num');
console.log(typeof true);
console.log(typeof [1,2,3]);
console.log(typeof {name: "Teste"});

// Delete - apaga uma propriedade de um objeto

var myObj = { nome: "Teste", age: 21};
delete myObj.age;
console.log(myObj);

/* True e False */

// undefined - false
// null - false
// string vazia - false
// string >= 1 - true
// object = true
// number +0,-0, NaN - false
// number >= 1 - true


