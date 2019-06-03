const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
}

const { nome, endereco: { cidade, estado } } = empresa

console.log(empresa)
console.log(nome)
console.log(cidade)
console.log(estado)
//

const usuario = {
    nome: 'Stefano',
    idade: 23
}

function mostraInfo({ nome, idade } = usuario){
    return `${nome} tem ${idade} anos.`
}

console.log(mostraInfo({ nome: 'Diego', idade: 18 }))
//

