// Local Storage

// Métodos Principais

// setItem(key,value) ARmazena valor associado a uma chave

localStorage.setItem('aluno1','Antony')
localStorage.setItem('aluno2','Mauricio')
localStorage.setItem('aluno3','Patrine')


//getItem(key) recupera o valor associado auma chave

localStorage.getItem('aluno')
const aluno = localStorage.getItem('aluno')
console.log('aluno',aluno)

// removeItem(key) remove a chave e o valor associado

localStorage.removeItem('aluno')


//Clear() remove todos os dados armazenados

// localStorage.clear()

//key(index) retorna o nome da chave pelo índice
const patrine = localStorage.key('aluno3')

console.log('Nome = ',patrine)