// FUNÇÕES
// São blocos de código que realizam uma tarefa quando chamadas.

function nome(n) {
  let bomDia = "Bom Dia! ";
  return console.log(bomDia + n);
}

function soma(x=1, y=1) {
  return x + y;
}

console.log("Soma", soma());

function soma3(x, y) {
  // let a = x
  // let b = y
  // let c = a + b
  return console.log("resultado da soma", x + y);
}
soma3(9, 6);
soma3(5, 4);
soma3(-5, -4);

const subtracao = (a, b) => {
  return console.log("O resultado da subtração e:", a - b);
};
subtracao(2, 3);

// function soma2(x,y){
//     let z = x+y
//     return z
// }

// console.log('Soma' , soma(2,3))
// console.log('Soma2' , soma2(2,3))

nome("Mauricio");
nome("Alessandra");
// nome('David')
// nome('Gilson')
// nome("Alessandra")

// function soma(a, b) {
//     console.log(alessandra)
//     return console.log(a + b);

// }

// function subtrair(a, b) {
//     return console.log(a - b);

// }

// soma(5,5)

// soma(8,9)

// subtrair(7,5)


