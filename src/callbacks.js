// CallBacks
/*
import rl from "node:readline";
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//const myQuestion = "Qual é o seu nome? ";
const handle = (answer) => {
    console.log("Você acabou de responder " + answer);
    prompt.close();
}
prompt.question(myQuestion, handle);
*/

/*
prompt.question("Digite seu nome: ", (answer) => {
    console.log("Bem vindo(a)", answer);
    prompt.close();
    
})
*/

const numbers = [1,2,3,4];
function printNumber(number){console.log("Número:", number);
}
//numbers.forEach(printNumber);
//numbers.forEach(number => console.log("N: ", number));
numbers.forEach(console.log);

/*
function main(callback){
    console.log("Hello World");
    callback();
}


function exec(){} 
const exec = () => {
    console.log("Felipe");
}

main(()=>{
    console.log("Felipe");}
);

function exec(){
    console.log("1+1=", 1+1);
    
}

console.log("Inicio do programa");

setTimeout(exec, 1000)

console.log("Fim do programa");
*/