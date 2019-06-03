// MAP

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

const idade = usuarios.map(item => item.idade)
console.log(idade)

// FILTER

const rkc = usuarios.filter((item) => {
    if(item.empresa === 'Rocketseat' && item.idade > 18){
        console.log(item)
    }
})

// FIND
const google = usuarios.find(user => user.empresa === 'Google')
console.log(google)

// UNINDO OPERAÇÕES (MAP E FILTER)
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo)