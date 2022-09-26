
//OBJETO
const livro ={
    titulo: 'habitos atomicos',
    autor: 'jemes clear',
    paginas: 306,
    capitulos:{
        cap1: 'fundamentos',
        cap2: 'primeira semana',
    },
    impressãoLivros: function(){
        console.log('imprimir')
    }
}
console.log(livro)

//livro.impressãoLivros()

const livrojr ={
    titulo: 'Senhor dos Aneis',
    autor: 'JR Tolkien',
    paginas: 1320,
    capitulos:{
        cap1: 'A sociedade do anel',
        cap2: 'As duas torres',
        cap3: 'O retorno do rei',
    },
    impressãoLivros: function(){
        console.log('imprimir')
    }
}
console.log(livrojr)

//FACTORY
/*
function criandoLivros(titulo, autor, paginas){
    const livro ={
        tituloLivro: titulo,
        autorLivro: autor,
        paginasLivro: paginas,
    }
    return criandoLivros
}

const livro1 = criandoLivros('habitos atomicos', 'jemes clear', 306)
const livro2 = criandoLivros('Senhor dos Aneis', 'JR Tolkien', 1320)


console.log(livro1)
console.log(livro2)
*/

//CONSTRUCTOR
function criandoLivros(titulo, autor, paginas){
        tituloLivro = titulo;
        autorLivro = autor;
        paginasLivro = paginas;
}

const livro1 = new criandoLivros('habitos atomicos', 'jemes clear', 306)
const livro2 = new criandoLivros('Senhor dos Aneis', 'JR Tolkien', 1320)


console.log(livro1)
console.log(livro2)

//TEMPLEITES LATERAIS
const email = `Olá Marcelo
Nossa reunião esta confirmada!
att`

console.log(email)