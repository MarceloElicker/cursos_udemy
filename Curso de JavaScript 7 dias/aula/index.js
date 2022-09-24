console.log('javascript esta fincionando');

let primeiroNome = 'Marcelo';
let segundoNome = 'Elicker';

console.log(`${primeiroNome} ${segundoNome} sou eu!`);


const valor = 30;

//const valor = 20;
console.log(valor);

//Objects
let caneta ={
    itemName: 'caneta',
    itemValor: 5,
    itemDisponivel: true,
    itemCor: 'red'
}
console.log(caneta)

//Array
let friends = ['Marcos', 'Silvia', 'Elisa']
console.log(friends)
console.log(friends[2])

friends[0] = 'Marcelo'
console.log(friends)


//Função
function qualStatus(){
    console.log('aprovado')
}
qualStatus()

function desconto10(valor){
    return valor - (valor * (10/100))
}
let total = desconto10(20)

console.log(total)


//incremento e decremento
let num1 = 5

++num1

console.log(num1)

//ATribuição
num1 = 6

num1 +=50
num1 -=30
num1 /=3
num1 *=2

console.log(num1)


//Operadores ternários
let driver = 90
let speed = driver > 110 ? 'acime de' : 'abaixo de'

console.log(speed)


//IF e ELSE
let velocidadeAtual = 40

if (velocidadeAtual > 110){
    console.log(`Sua velocidade atual de ${velocidadeAtual} km/h é maior que a permitida, vc foi MULTADO!`)
}else if(velocidadeAtual >= 40){
    console.log(`sua velocidade de ${velocidadeAtual} km/h esta dentro do permitido`)
}else if(velocidadeAtual < 40){
    console.log(`Sua velocidade é de ${velocidadeAtual} km/h e esta abaixo da velocidade mínima, vc foi MULTADO`)
}


//SWITCH / CASE
let aeroporto = 'RJ'

switch (aeroporto){
    case 'FL':
        console.log('Florianópolis')
        break
    case 'POA':
        console.log('Porto Alegre')
        break
    case 'SP':
        console.log('São Paulo')
        break
    default:
        console.log('Não encontrado')
        
}

/*
//FOR LOOP
let i = 0
for (i = 0; i <= 10; i++){
    console.log(`o valor de i é ${i}`)
}

//WHILE LOOP/

while (i <=20){
    console.log(`o valor de i é ${i}`)
    i++
}

//DO WhiLE LOOP
do{
    console.log(`o valor de i é ${i}`)
    i++
}while (i <=20)

*/

//FOR IN LOOP
const myCar = {
    model: 'BMW',
    year: 2023,
    Km: 20000
}

for (let i in myCar)
    console.log(i, myCar[i])

const amigos = ['eu', 'Ana', 'Betriz']

for (let a of amigos)
    console.log(a)