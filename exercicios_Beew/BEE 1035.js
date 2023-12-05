// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma 
// de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par
// escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
// Entrada

// Quatro números inteiros A, B, C e D.
// Saída

// Mostre a respectiva mensagem após a validação dos valores.
var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n')


var [a, b, c, d] = lines.shift().split(' ').map(Number);

if ((b > c && d > a) && (c + d > a + b) && (c > 0 && d > 0) && (a % 2 == 0)) {
    console.log("Valores aceitos");
} else {

    console.log("Valores nao aceitos");
}


