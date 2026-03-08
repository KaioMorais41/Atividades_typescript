// Fila

import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
let opcao: number;

do {

    console.log("\n-------------------------------------------");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("-------------------------------------------");

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch(opcao){

        case 1:
            let cliente = readlinesync.question("Digite o nome do Cliente: ");
            fila.enqueue(cliente);
            console.log("\nFila: \n");
            fila.printQueue();
            console.log("\nCliente Adicionado!");

        break;

        case 2:
            console.log("\nLista de Clientes na Fila: \n");
            fila.printQueue();
        break;

        case 3:
        if (fila.isEmpty()) {
        console.log("\nA fila esta vazia!");
        } else {
        let clienteChamado = fila.dequeue();

        console.log("\nFila: \n");

        fila.printQueue();

        console.log(`\nO Cliente ${clienteChamado} foi chamado!`);

        }
        
        break;

        case 0:
            console.log("\nPrograma Finalizado!");
        break;

        default:
            console.log("\nOpcao invalida!");
        break;
    }

}while(opcao !== 0);