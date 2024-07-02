let novaTarefa = document.getElementById("input");
let buttonAdicionar = document.getElementById("adicionar");
let ul = document.getElementById("listaDeTarefas");

buttonAdicionar.addEventListener("click", function () {
  console.log(novaTarefa.value);

  if (novaTarefa.value !== "") {
    let li = document.createElement("li");
    li.textContent = novaTarefa.value;

    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    inputCheck.addEventListener("click", () => {
      console.log(inputCheck.checked);

      if (inputCheck.checked === true) {
        li.className = "feito";
      } else {
        li.className = "";
      }
    });

    let buttonDeletar = document.createElement("button");
    buttonDeletar.textContent = "Excluir Tarefa";
    buttonDeletar.addEventListener("click", function () {
      ul.removeChild(li);
    });

    li.appendChild(inputCheck);
    li.appendChild(buttonDeletar);
    ul.appendChild(li);
    novaTarefa.value = "";
  }
});
