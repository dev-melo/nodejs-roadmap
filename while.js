const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(query){
    return new Promise((resolve) => {
        prompt.question(query, resolve);
    })
}

async function main() {
    let number;

    do{ // se usado while padrao seria exibido Você digitou undefined, gerendo 
        const answer = await question("Digite um numero qualquer: ");
        number = Number.parseInt(answer);

        if(Number.isNaN(number)) console.log("Não é um número");

    } while(Number.isNaN(number));

    prompt.close();
    console.log(`Você digitou ${number}`);
    
}

main()