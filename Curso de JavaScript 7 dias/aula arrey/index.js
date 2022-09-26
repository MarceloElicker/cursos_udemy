let friends = ['marcos', 'Silvia', 43, 'Elisa']

console.log(friends)
console.log(friends[0])

friends[0] = 'Marcelo'
console.log(friends)

//ADD ELEMENTOS NA ARRAY

const num = [7, 8, 9]


num.push(10, 15)

num.unshift(1, 2, 3)

num.splice(3, 0, 4, 5, 6)

console.log(num)

console.log(num.indexOf(10))

const fimes = [
    {id: 1, nomeFilme: 'Os estagiários'},
    {id: 2, nomeFilme: 'O sehor dos anéis'},
    {id: 3, nomeFilme: 'The matrix'}
]

console.log(fimes)

console.log(fimes.find(filmes => filmes.nomeFilme == 'The matrix'))

//Junstando ARRAYs

let numeros = [5,6,7,8]
console.log(numeros)

let letras = ['a','b','c']
console.log(letras)

juntos = numeros.concat(letras)
console.log(juntos)
//juntos.reverse()
juntos.sort()


console.log(juntos)