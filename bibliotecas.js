// Bibliotecas
// Melhor lugar para achar libs node: https://www.npmjs.com/package/chalk
// npm install chalk
import chalk from "chalk";

//console.log(chalk.blue.underline.bold("AZUL"));
//console.log(chalk.bgGreen.black("Verde!!!"));

import { intro, text, outro } from "@clack/prompts";
async function main() {
    intro(chalk.green("Bem vindo ao programa."));
    const name = await text({message: "Qual é o seu nome?"});
    outro(`Olá ${name}`)
}

main();