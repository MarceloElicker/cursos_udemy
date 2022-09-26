

let valorProduto = Number(prompt('Digite o valor do produto: '))

if(valorProduto >=20){
    document.getElementById('resultado').innerHTML = (`O valor de ${valorProduto} esta, APROVADO`)
}
else{
    document.getElementById('resultado').innerHTML = 'Reprovado'
}
