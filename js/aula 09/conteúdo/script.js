// criando elementos

let container = document.querySelector(".container");
console.log(container);

let novoPragrafo = document.createElement("p");
novoPragrafo.textContent = "Meu Parágrafo!";
novoPragrafo.className = "paragrafo";

container.appendChild(novoPragrafo);

container.innerHTML += `<p class='paragrafo2'>Meu Parágrafo com innerHTML</p>`;

let novoButton = document.createElement("button");
novoButton.textContent = "click";
novoButton.id = "buttonClick";
novoButton.type = 'button'

container.appendChild(novoButton);

// novoButton.addEventListener("click", function () {
//   alert("oi");
// });

let acessButon = document.getElementById("buttonClick");

acessButon.addEventListener("click", function () {
    // alert("oi");
    container.style.background = 'red'
});
