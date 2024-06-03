//DECLARAÇÃO DE VARIÁVEIS

// Variáveis são como caixas que nos permite armazenar
//  e manipular informações de diferentes formas.

// variávei são declaradas usando palavras chaves var, let e const

var idade = 30;
let nome1 = "Mauricio";
let nome2 = 'João';
let nome3 = `Pedro`;
const saldo = 50;

// TIPOS DE DADOS 

// Números
// Inteiros (number): números inteiros, como -3, 0, 42.
// Ponto flutuante (number): números decimais, como 3.14, -0.001.

let numeroInteiro = 10;
let numeroDecimal = 3.14;

// Strings
// Sequências de caracteres.
// São definidas entre aspas simples (' '), duplas (" ") ou templates string (` `).
// Podem conter letras, números, espaços e caracteres especiais.

let nome4 = 'Mauricio';
let nome5 = "João";
let nome6 = `Pedro`;

// Booleanos
// Valores lógicos true (verdadeiro) ou false (falso).
// São usados em expressões condicionais e lógicas.

let verdadeiro = true;
let falso = false;

// Arrays
// Conjuntos ordenados de valores.
// Podem conter diferentes tipos de dados.
// São declarados entre colchetes [ ].

let array = [1, 2, 3, 4] 
let arrayStrings = ['1', '2', '3', '4'];

// Objetos
// Estruturas de dados complexas que podem conter múltiplos valores.
// São compostos por pares chave-valor.
// São declarados entre chaves { }.

let objeto = { nome: "João", idade: 25, altura: 1.75, temCartãoDeCrédito:true };


// CONVERSÃO DE TIPOS DE DADOS 

// De inteiro para string
let numero = 42;
let numeroComoString = numero.toString();

// De string para inteiro
let numeroEmTexto = "123";
let numeroConvertido = parseInt(numeroEmTexto);

// De string para float
let numeroDecimalEmTexto = "3.14";
let numeroFloat = parseFloat(numeroEmTexto);


// OPERADORES ARITMÉTICOS

// let numero1 = parseFloat(prompt("Digite o primeiro número:"));
// let numero2 = parseFloat(prompt("Digite o segundo número:"));

let numero1 = 1;
let numero2 = 2;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;
let potencia_math = Math.pow(numero1, numero2);

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);
console.log("Potência:", potencia);
console.log("Potência_math:", potencia_math);




