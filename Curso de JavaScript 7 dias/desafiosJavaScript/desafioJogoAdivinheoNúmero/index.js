// O primeiro passo foi cria no Body a função INIT, "onload = init"

let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function newGame() { //função para reiniciar a pagina sempre que clicarmos em 'novo jogo'
    window.location.reload()
}

function init() { //Função para gerar um numero sempre que inicar a pagina.
    computerNumber = Math.floor(Math.random() * 100 + 1) //Cod para o app gerar um numero entre 1 e 100, o inicio Math.floor é para o numero não ser com virgula.
}

function compareNumbers() { //função para salvar o numero que digitamos na pagina
    const userNumber = Number(document.getElementById('inputBox').value) // criamos uma variável para o numero que é digitado.
    userNumbers.push(' ' + userNumber)//adicionamos a variavel dentro da ARRAY criada
    document.getElementById('guesses').innerHTML = userNumbers // irá mostrar o numero digitado na pagina em 'seus palpites'

    if (attempts < maxguesses){ //if para colocarmos um limite de tentativas dos palpites em 10 vezes
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = ('Seu número é MAIOR que o meu!')
            document.getElementById('inputBox').value = '' //linha de codigo para sempre que digitarmos um numero no palpite e valor voltar a ficar limpo, para digitarmos outro
            attempts++ //linha de codico para sempre somar u quando digitarmos um numero em nossos palpites
            document.getElementById('attempts').innerHTML = attempts //linha de cod que mostra na pagina o numero de tentativas que já fizemos
        }else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = ('Seu número é MENOR que o meu!')
            document.getElementById('inputBox').value = '' //linha de codigo para sempre que digitarmos um numero no palpite e valor voltar a ficar limpo, para digitarmos outro
            attempts++ //linha de codico para sempre somar u quando digitarmos um numero em nossos palpites
            document.getElementById('attempts').innerHTML = attempts //linha de cod que mostra na pagina o numero de tentativas que já fizemos
        }else{
            document.getElementById('textOutput').innerHTML = ('Parabéns vc GANHOU!!!')
            attempts++ //linha de codico para sempre somar u quando digitarmos um numero em nossos palpites
            document.getElementById('attempts').innerHTML = attempts //linha de cod que mostra na pagina o numero de tentativas que já fizemos
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //linha de cod para ao ganhar ou perder o jogo parar de receber tentativas
            
        }
    }else{
        document.getElementById('textOutput').innerHTML = (`VC PERDEU, meu número era: ${computerNumber}`)
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //linha de cod para ao ganhar ou perder o jogo parar de receber tentativas
    }
}