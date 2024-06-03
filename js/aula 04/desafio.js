// faça uma função que calcule a área de um retângulo;

function areaRetangulo(base, altura) {
  return base * altura;
}

let area = areaRetangulo(8, 4);

console.log("Área do retângulo: " + area);
console.log("Área do retângulo: ", area);

// argumentos opcionais

function multiplicacao(x, y = 2) {
return x * y

}

console.log(multiplicacao(5))
console.log(multiplicacao(5,3))
