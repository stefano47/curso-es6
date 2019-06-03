const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr
console.log(x)
console.log(y)
//

function soma(...params){
    return params.reduce((item, next) => item + next)
}

console.log(soma(2, 3, 6, 9, 5, 5))
//

const usuario = {
    nome: 'Stefano',
    idade: 23,
    endereco: {
        cidade: 'Fortaleza',
        uf: 'CE',
        pais: 'Brasil'
    }
}

const usuario2 = { ...usuario, nome: 'Gabriel' }
console.log(usuario)
console.log(usuario2)

const usuario3 = { ...usuario, endereco: { ...usuario.endereco,  cidade:'Lontras' } }
console.log(usuario3)