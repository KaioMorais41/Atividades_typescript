// Pilha

import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>()
let opcao;

        do {

            console.log("\n-------------LIVRARIA TURMA 14-------------");
            console.log(" 1 - Adicionar Livro na pilha ");
            console.log(" 2 - Listar todos os livros ");
            console.log(" 3 - retirar livro da pilha ");
            console.log(" 0 - Sair ")   
            console.log("-------------------------------------------");

            opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        switch(opcao){
            case 1:
                let nomedolivro = readlinesync.question("Digite o nome do livro que deseja adicionar: ");
                pilha.push(nomedolivro);                
                console.log("\nPilha:\n");
                pilha.printStack();
                console.log("\nLivro adicionado!");

            break;

            case 2:
                console.log("Lista de Livros na Pilha: \n");
                pilha.printStack();

            break;

            case 3:
                if(pilha.isEmpty()){
                    console.log("\nA Pilha está vazia!")
                }else{
                    pilha.pop();
                    console.log("\nPilha atual:\n");
                    pilha.printStack();
                    console.log("\nUm Livro foi retirado da pilha!:\n");
                }

            break;

            case 0:
                console.log("\nPrograma Finalizado!");
            break;

            default:
                console.log("Opcao invalida!")
            break;
        }
            
        
        } while (opcao !== 0);
