// JSON - JavaScript Object Notation

// import json from "../src/person.json" with { type: "json"};
// console.log(json.name);

import { writeFileSync, readFileSync } from "node:fs";

async function main(){

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12");
    const data = await response.json();
    console.log(data);
    
}
// main();





// const stringJson = readFileSync("newperson.json", "utf8");
// console.log(stringJson);

// const json = JSON.parse(stringJson);
// console.log(json);



const person0 = {
    name: "Melo",
    age: 22,
    isProgrammer: true,
    greet(){console.log("Meu nome é", this.name);}
}

writeFileSync("./newperson.json", JSON.stringify(person0, null, 2), "utf8");


// const stringJson = JSON.stringify(person0); // tira os metodos de dentro do 'json'
// console.log(stringJson);


// const person = JSON.parse('{"name": "Felipe"}'); // transforma em json 
// const person2 = JSON.parse("{\"name\": \"Iori\"}");
// console.log(person);
// console.log(person2);



