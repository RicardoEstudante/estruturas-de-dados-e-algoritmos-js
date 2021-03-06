
// Assim como em arrays e objetos JavaScript,
// o operador delete também pode ser usado para remover um elemento de um array,
// por exemplo, delete numbers[0].
// No entanto, a posição 0 do array terá o valor undefined,
// ou seja, será o mesmo que executar numbers[0] = undefined,
// e teríamos de reindexar o array.
// Por esse motivo, devemos sempre usar os métodos splice,
// pop ou shift para remover elementos.

numbers.splice(5, 0 , 1, 2, 3);
// splice também adiciona se passar-mos o segundo elemento com 0,
// e o terceiro argumento informando o valor a ser adicionado no índice informado no primeiro parâmetro.


// concat Junta vários arrays e devolve uma cópia dos arrays concatenados.
// every Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido.
// filter Cria um array com todos os elementos avaliados com true pela função especificada.
// forEach Executa uma função específica em cada elemento do array.
// join Reúne todos os elementos do array em uma string.
// indexOf Pesquisa o array em busca de elementos específicos e devolve a sua posição.
// lastIndexOf Devolve a posição do último item do array que corresponda ao critério de pesquisa.
// map Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério.
// reverse Inverte o array, de modo que o último item se torne o primeiro, e vice-versa.
// slice Devolve um novo array a partir do índice especificado.
// some Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.
// sort Organiza o array em ordem alfabética ou de acordo com a função especificada.
// toString Devolve o array na forma de uma string.
// valueOf É semelhante ao método toString e devolve o array na forma de uma string.



