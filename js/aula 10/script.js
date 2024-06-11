const inputTarefas = document.getElementById("inputTarefas");
const buttonAdicionar = document.getElementById("button");
const ul = document.getElementById("lista");

buttonAdicionar.addEventListener("click", function () {
  let tarefa = inputTarefas.value;

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.push(tarefa);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  ul.innerHTML = "";

  exibirLista();
  //   tarefas.map((tarefa) => {
  //     const li = document.createElement("li");
  //     const button = document.createElement("button");
  //     button.type = "button";
  //     button.textContent = "Excluir";
  //     li.textContent = tarefa;
  //     li.appendChild(button);
  //     ul.appendChild(li);
  //   });
  inputTarefas.value = "";
});

function excluirTarefa(index) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  ul.innerHTML = "";
  exibirLista();
  console.log("tarefas", tarefas);
}

function exibirLista() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.map((tarefa, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Excluir";
    button.id = index;
    // button.onclick = () => excluirTarefa(index);
    li.textContent = tarefa;

    button.addEventListener("click", function () {
      tarefas.splice(index, 1);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      ul.innerHTML = "";
      exibirLista();
      console.log("tarefas", tarefas);
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
}

exibirLista();
