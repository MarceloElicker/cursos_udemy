const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//função do click
btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] //co que muda a cor do fundo
    color.textContent = colors[randomColor] //cod para mostrar o nome da cor "sua cor:"
})

//função para escolher a cor dentro a array
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}