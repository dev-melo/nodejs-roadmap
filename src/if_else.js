const rl = require("node:readline");
const date = new Date();
const year = date.getFullYear();
const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Digite quantos anos faz este ano: ", answer => {
    const age = Number.parseInt(answer);
    if(Number.isNaN(age)){ // isNaN < not a number 
        console.log("o que você digitou não é um número válido.");
    } else {
        console.log(`Você nasceu em ${year - age}`)
    }
    prompt.close();
})

