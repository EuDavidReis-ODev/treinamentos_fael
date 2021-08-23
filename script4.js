const readline = require('readline-sync')

var ligado = true

while(ligado == true){
    var pessoa1 = readline.question("Quem é vc? ")
    var valor = readline.question("Quanto vc ganha? ")
    
    var porcentagem = (valor*10)/100

    if(valor >= 10000){
        console.log( pessoa1 +" o seu dizimo é R$" +porcentagem +" porque vc é rico " )
    }else if(valor > 5000 && valor < 10000){
        console.log( pessoa1 +" o seu dizimo é R$" +porcentagem +" porque vc é de classe média alta. " )
        console.log(" ")
    }else if( valor <= 5000 && valor> 1100){
        console.log( pessoa1 +" o seu dizimo é R$" +porcentagem +" porque vc é de classe media.")
        console.log(" ")

    } else if(valor <= 1100){
        console.log( pessoa1 +" o seu dizimo é R$" +porcentagem +" porque voce é POBRE.")
        console.log(" ")

    }else{
        console.log("O valor informado é inválido, tente novamente.")
        console.log(" ")

    }

    console.log(" ")
    var resposta = readline.question("Quer usar o programa novamente? 1 = sim ou 2 = nao  ")
    if(resposta == 2){
        console.log("OK, tchau.")
        console.log(" ")
        break; 
    }else if(resposta == 1){
        console.log("OK, vamos lá...")
        console.log(" ")
    }
}



/*
>=10000 rico
>=5000 normal
<=1100 pobre
*/ 
