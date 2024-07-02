// Selecionando os Elementos

// id
let hello = document.getElementById('titulo1')
console.log(hello)
hello.style.color = 'blue'

// Class
let hello2 = document.getElementsByClassName('titulo2')[0]
console.log(hello2)
hello2.style.color = 'orange'

// tagName

let hello3 = document.getElementsByTagName('h1')[2]
console.log(hello3)
hello3.style.color = 'red'

//querySelector

let hello4 = document.querySelector('#titulo4')
console.log(hello4)
hello4.style.color='purple'
hello4.innerHTML = 'Helo alterado innerHTML'

let hello5 = document.querySelector('.titulo5')
console.log(hello5)
hello5.style.color = 'pink'
hello5.textContent ='hello alterado textContent'

// querySelectorAll
let hello6 = document.querySelectorAll('.titulo6')

hello6.forEach(hello =>{
    hello.innerHTML = 'Selecionado Hello6 SelectorAll'

})
console.log('hello6',hello6)
// hello6.style.background = 'blue'

let hello7 = document.querySelectorAll('.titulo7')[0]
console.log('hello7',hello7)
// hello7.style.background = 'red'
hello7.textContent ='hello7 SelectorAll'

