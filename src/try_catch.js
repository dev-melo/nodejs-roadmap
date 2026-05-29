// Try Catch - Tratamento de Erros

import { readFile } from "node:fs/promises";

async function main() {

    let file;
    try {
        file = await readFile("./src/try_catch.js");
    } catch (error) {
        file = error;
    } finally {
        console.log("Final do Try Catch")
    }    
    console.log(file.toString());   
}

function upper(string){
    if(typeof string !== "string"){
        throw new Error("Valor informado não é uma String.")
    }
    return string.toUpperCase();
}
try{
    console.log(upper("meu nome é felipe, e meu filho iori."));
    console.log(upper(123));
} catch(err){
    console.log("Error:",err.message);

}

console.log("Felipe");



