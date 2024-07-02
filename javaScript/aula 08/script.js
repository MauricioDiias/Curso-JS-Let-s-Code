function mudarCor(){
    let div = document.getElementsByClassName('container')[0]
    console.log(div)
    div.style.background = 'red'

    // alert('oi')
}
function mudarCorAzul(){
    let div = document.getElementsByClassName('container')[0]
    console.log(div)
    div.style.background = 'blue'

    // alert('oi')
}


let minhaDiv = document.getElementById('containerId')

minhaDiv.addEventListener('click',function(){
    // minhaDiv.innerHTML = 'Mauricio'
    alert('Você clicou na Div')
})