import readlinesync = require("readline-sync");

const numeros = new Set<number>();

for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt("Digite um numero: "));
}

console.log("Listar dados do Set:");

for(let numero of numeros){
    console.log(numero);
}






