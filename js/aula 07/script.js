// MANIPULAÇÃO DE DADOS

// CRUD
// Create, Read, Update e Delete
// Criar , Ler, Editar e Deletar

// Lista de Alunos do Curso Let´s Code!
// * Criar uma lista de alunos ok
// * Mostrar a lista no console ok
// * Adicionar alunos na lista ok
// * Editar alunos na lista ok
// * Deletar alunos da lista ok
// * Pesquisar alunos na lista ok

let alunos = [
  {
    nome: "João Pedro",
    idade: 19,
    cidade: "Camocim",
    aprovado: false,
  },
  {
    nome: "Luana",
    idade: 21,
    cidade: "São Luis",
    aprovado: true,
  },
  {
    nome: "Gustavo",
    idade: 21,
    cidade: "São Luis",
    aprovado: false,
  },
];

function listarALunos() {
  console.log("====== Lista de Alunos do Curso Let´s Code ======");
  alunos.map((aluno) => {
    let status;
    if (aluno.aprovado === true) {
      status = "Aprovado";
    } else {
      status = "Reprovado";
    }

    console.log(
      `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Cidade: ${aluno.cidade}, Status: ${status} `
    );
  });
}

function adicionarAlunos(nome, idade, cidade, aprovado) {
  alunos.push({ nome, idade, cidade, aprovado });
  console.log("====== Aluno Adicionado! ======");
  console.log(
    `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}, Status: ${aprovado} `
  );
}

function pesquisarAluno(nome) {
  let alunoEncontrado = alunos.find((aluno) => aluno.nome === nome);
  let status;
  if (alunoEncontrado.aprovado === true) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }
  console.log("====== Aluno Encontrado! ======");
  console.log(
    `Nome: ${alunoEncontrado.nome}, Idade: ${alunoEncontrado.idade}, Cidade: ${alunoEncontrado.cidade}, Status: ${status} `
  );
}

function editarAluno(nome, novoNome, novaIdade, novaCidade, novoStatus) {
  let index = alunos.findIndex((aluno) => aluno.nome === nome);
  console.log("index", index);
  if (novoNome) {
    alunos[index].nome = novoNome;
  }
  if (novaIdade) {
    alunos[index].idade = novaIdade;
  }
  if (novaCidade) {
    alunos[index].cidade = novaCidade;
  }

  if (novoStatus) {
    alunos[index].aprovado = novoStatus;
  }

  let status;
  if (alunos[index].aprovado === true) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  console.log("===========Aluno Editado ===========");
  console.log(
    `Nome: ${alunos[index].nome}, Idade: ${alunos[index].idade}, Cidade: ${alunos[index].cidade}, Status: ${status}`
  );
}

function removerAlunos(nome) {
  let alunosFiltrados = alunos.filter((aluno) => aluno.nome !== nome);
  let alunoRemovido = alunos.filter((aluno) => aluno.nome === nome);

  // console.log("alunosFiltrados", alunosFiltrados);
  // console.log("alunoRemovido", alunoRemovido);

  alunos = alunosFiltrados;
  // [A]
  let status;
  if (alunoRemovido[0].aprovado === true) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  console.log("=========== Aluno Removido ===========");
  console.log(
    `Nome: ${alunoRemovido[0].nome}, Idade: ${alunoRemovido[0].idade}, Cidade: ${alunoRemovido[0].cidade}, Status: ${status}`
  );
}

// adicionarAlunos("Alessandra Sousa", 20, "Parnaíba", true);
// listarALunos();
// pesquisarAluno("João Pedro");

listarALunos();
editarAluno("João Pedro", "João Henrique");
listarALunos();
removerAlunos("Luana");
listarALunos();
