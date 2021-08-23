const readline = require('readline-sync')


const idadePai = parseInt(readline.question('Qual a idade do seu pai?'))
const idadeMãe = parseInt(readline.question('Qual a idade da sua mãe?'))
const idadeIrmão = parseInt( readline.question('Qual a idade do seu irmão?'))
const idadeIrmã = parseInt(readline.question('Qual a idade da sua irma?'))
const idadeSua = parseInt( readline.question('Qual a sua idade?'))

var media = (idadePai + idadeMãe + idadeIrmão 
    + idadeIrmã + idadeSua)/5
    console.log(media)
    
    