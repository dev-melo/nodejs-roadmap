// Promise
// Uma promise é um obj que representa uma eventual conclusao ou falha, de uma determinada operação assincrona.

function requestCar(drivers){
    return new Promise((resolve, reject) => {
        if(drivers > 0){
            return resolve("Seu motorista está a caminho.");
        }
        return reject("Não há motoristas disponíveis.");
        
    });
}

// function main(){
//     let drivers = 0;
//     const request = requestCar(drivers);

//     request
//     .then((text) => {
//         console.log("Promesa concluída!", text);
        
//     })
//     .catch((err) => {
//         console.log("Promesa regeitada!", err);

//     })
//     .finally(() => {
//         console.log("Fim da promesa!");

//     });
// }

// async function main(){
//     let drivers = 90;
//     const request = await requestCar(drivers).catch(() => null);

//     if(!request){
//         console.log("ERRO");
//         return;        
//     }

//     console.log(`Resultado: ${request}`);    
// }

function getRandom() {
    return new Promise((resolve) => 
        setTimeout(() => 
            resolve(Math.random() * 30), 
        3000));   
}

async function main(){
    console.log("Inicio do programa");
    
    const value = await getRandom(); // Usando desta forma o programa vai pausar a função e aguardar terminar o processamento e depois continuar o fluxo
    console.log(value);
    
}

async function main2() {
    console.log("Inicio do programa");

    getRandom().then(value => { // Usando desta forma o programa vai continuar o fluxo mostrando ambos inicio e fim do programa e depois do tempo/processamento o resultado da promise
        console.log(value);
        
    });

    console.log("Fim do programa");
    
}


// função de set time out assincrona
import { setTimeout } from "node:timers/promises";

async function main3() {
    const value = await setTimeout(2000, Math.random());
    console.log(value);
       
}



async function getNumber(){
    return 5;
} 

async function main4() {
    console.log("Inicio do programa");    
    const value = await getNumber();
    console.log(value + 1);
       
}
import { text } from "@clack/prompts";
async function main5() {
    const name = await text({message: "Digite seu nome!:"});
    const age = await text({message: `Digite sua idade ${name}:`})
    console.log("Seja bem vindo(a)", name);        
}
main5();