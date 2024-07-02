// OPERADORES DE ATRIBUIÇÃO

// Atribuição simples ( = )

// Atribuição  com operação( += , -= , *= , /= , %=  )

let x = 10;
// x = x + 1
x += 1;
console.log("x =", x);

let y = 5;
// y = y - 1
y -= 1;
console.log("y =", y);

let k = 3;
// k = k * 2
k *= 2;
console.log("k =", k);

let w = 8;
// w = w / 2
w /= 2;
console.log("w =", w);

let g = 10;
//   g = g % 3
g %= 3;
console.log("g =", g);


// OPERADORES DE COMPARAÇÃO
let ex1 = '2';
let ex2 = 2;

// Igual ( == )

console.log('1.',ex1 == ex2);

// Estritamente Igual ( === )

console.log('2.',ex1 === ex2);

// Diferente ( != )
console.log('3.',ex1 != ex2);

// Estritamente Diferente ( !== )
console.log('4.',ex1 !== ex2);

// Maior que ( > )
console.log('5.',ex1 > ex2); 

// Menor que ( < )
console.log('6.',ex1 < ex2);

// Maior ou Igual ( >= )
console.log('7.',ex1 >= ex2);

// Menor ou Igual ( <= )
console.log('8.',ex1 <= ex2);

// OPERADORES LÓGICOS

let primeiraVariavel = 5
let segunda_variavel = 10

// E ( && )
//  console.log('1. comparação &&',(primeiraVariavel != segunda_variavel) && (segunda_variavel > primeiraVariavel) );
console.log('1 - &&', true && true)
console.log('2 - &&', true && false)
console.log('3 - &&',false && true)
console.log('4 - &&',false && false)

// OU ( || )
console.log('1 - ||', true || true)
console.log('2 - ||', true || false)
console.log('3 - ||',false || true)
console.log('4 - ||',false || false)

// NÃO ( ! )

console.log(!true)
console.log(!false)
console.log('&&', !(true && true))
console.log('||', !(false || false))
