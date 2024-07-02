// Arrays
// Arrays são estruturas que permite armazenar e manipular
// uma colação itens. Cada item é identificado por um índice numerico

let numeros = [1, 2, 3, 4, 5];

let numerosPares = new Array(2, 4, 6, 8);

console.log(numeros.indexOf(1));
console.log(numeros.indexOf(2));
console.log(numeros.indexOf(3));
console.log(numeros.indexOf(4));

console.log("Dado que está no índice 2:", numeros[2]);
console.log(numerosPares);

let cores = ["vermelho", "verde", "preto"];

console.log(cores.indexOf("verde"));
console.log(cores.indexOf("vermelho"));
console.log(cores.indexOf("preto"));
// Acessando um único elemento
console.log(cores[1]);
console.log(cores[0]);
console.log(cores[2]);
console.log(typeof cores);
console.log(Array.isArray(cores));

// Tamanho do Array
console.log(cores.length);

console.log("Loop For");
let cardio = ["Dr Jão", "Dr Pedro", "Dr Antony", "Dra Gabi", "Dra Patrine"];

console.log(cardio.length);

for (let i = 0; i < cardio.length; i++) {
  console.log(cardio[i]);
  //   console.log(i);
}

let novoCardio = "Dr Gilson";
let novoCardio2 = "Dr Jonatas";

// cardio[cardio.length] = novoCardio;

// Adiciona um elemento a última posição da lista (push())
cardio.push(novoCardio);
cardio.push(novoCardio2);

console.log(cardio);

// Remove o último elemento da lista (pop())
cardio.pop();
console.log(cardio);

// map
console.log("map");

cardio.map((item) => {
  return console.log(item.toUpperCase());
});

console.log("========Professores=====");

let professores = ["joão", "fernando", "thiago"];

professores.map((professor) => {
  console.log("PROF. " + professor.toUpperCase());
});
console.log(professores)
let numerosEspeciais = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numerosEspeciais.map((num) => {
// console.log(num + 5);
 if(num % 2 == 0){
    console.log(num)
 }
});
