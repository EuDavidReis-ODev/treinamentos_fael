const readline = require('readline-sync')

var pessoa1 = readline.question("Quem é vc? ")
var idade1 = readline.question("Quantos anos vc tem? ")

var pessoa2 = readline.question("Quem é vc? ")
var idade2 = readline.question("Quantos anos vc tem? ")


if(idade1>idade2){
    console.log("O mais velho é "+pessoa1+" ele tem "+idade1)
}else if(idade1<idade2){
    console.log("O mais velho é "+pessoa2+" ele tem "+idade2)
}else if(idade1==idade2){
    console.log("Ambos tem a mesma idade.")

}