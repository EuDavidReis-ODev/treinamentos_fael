const readline = require('readline-sync')

const nome = readline.question('Qual o seu nome?')
const sobrenome = readline.question('Qual o seu sobrenome?')
const idade = readline.question('Qual a sua idade')
console.log('seu nome é '+nome)
console.log('seu sobrenome é '+sobrenome)
console.log('sua idade é '+idade)

//console.log(idadePai > idadeMãe,idadeIrmã,idadeIrmão,idadeSua)
/**
 * const primeiraNota = parseFloat(readline.question('Nota 1 '))
const segundaNota = parseFloat(readline.question('Nota 2 '))
const terceiraNota = parseFloat(readline.question('Nota 3 '))
const quartaNota = parseFloat(readline.question('Nota 4 '))
const quintaNota = parseFloat(readline.question('Nota 5 '))*/
