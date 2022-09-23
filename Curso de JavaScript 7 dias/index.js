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