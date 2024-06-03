const pessoa = {
  nome: "Gabriele",
  idade: 21,
  ocupacao: "Estudante",
};

function me() {
  return console.log(
    "Meu nome é",
    pessoa.nome,
    ", tenho",
    pessoa.idade,
    "de idade e sou",
    pessoa.ocupacao,
    "no curso de Análise e Desenvolvimento de Sistemas"
  );
}

me()
