// OBJETOS

// Objetos são uma parte fundamental do javaScript e são usados para armazenar
// dados e funcionalidades
// de forma or ganizada, são coleções de pares chave e valor

const pessoa = {
  nome: "Mauricio",
  idade: 30,
  profissao: ["Educador", "Desenvolvedor"],
  estaTrabalhando: true,
  temCarteiraDeMotorista: true,
  apresentacao: function apresentar() {
    console.log("Olá sou Educador e Desenvolvedor!");
  },
};
pessoa.nome = "Jonatas";
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.estaTrabalhando);
console.log(pessoa.temCarteiraDeMotorista);
console.log(pessoa.idade);

console.log((pessoa["idade"] = 13));
pessoa.apresentacao()


function tanana(){
    return console.log('')
}

// crie uma função que quando chamada vai executar uma fase de apresentação no console
// com uma breve apresentação sobre você, mas as informações terão que vir de um objeto