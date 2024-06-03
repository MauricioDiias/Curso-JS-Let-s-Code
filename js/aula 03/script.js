//ESTRUTURAS DE CONTROLE

// AS ESTRUTURAS CONDICIONAIS PERMITEM QUE O PROGRAMA TOME DECISÕES COM BASE EM CONDIÇÕES

media = 10;

if (media >= 9) {
  console.log("ganha uma medalha!");
} else if (media >= 3) {
  console.log("Segunda chamada!");
} else if (media >= 6) {
  console.log("passou!");
} else {
  console.log("Não tem mais o que fazer!");
}


// if(media >= 9  ){
//     console.log('ganha uma medalha!')
// }
// if(media >= 3){
//     console.log('Segunda chamada!')
// }
//  if(media >= 6){
//     console.log('passou!')
// }

//switch

let mes = "fevereiro";
switch (mes) {
  case "janeiro":
    console.log("não é o mês correto");
  case "fevereiro":
    console.log("esse é o mês correto!");
    break;
}

// loops

// for
// for(let i = 0;i < 10 ;i++){
//     console.log(i)
// }

// break e continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`uso do break ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(`uso do continue ${i}`);
}

// while
let w = 0;
while (w < 5) {
  console.log(w);
  w++;
}

// do-wile

let d = 5;

do {
  console.log(`d = ${d}`);
  w++;
} while (d < 5);
