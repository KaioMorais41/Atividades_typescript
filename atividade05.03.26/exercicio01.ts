import readlinesync = require("readline-sync");

const cores= new Array<string>(5);
let corescolhida;

for(let i = 0; i < cores.length; i++){
    corescolhida = readlinesync.question("Digite a cor: ")
    cores[i] = corescolhida
}

console.table(cores)

cores.sort();

console.table(cores)

