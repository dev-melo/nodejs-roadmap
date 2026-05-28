//Variáveis

const name = "Felipe";
console.log(name);

// const let var

// var sera o menos usado nas novas versões - pode ser acessada fora do escopo onde fora criada, variavel global
// const e let só podem ser acessados no escopo onde foi criada.
// const não pode ser mudada / CONSTante
// let pode ser modificado.

// podem ser atribuidos a variaveis diversos tipos de dados como mostrado abaixo:

let string = "Um texto";
let number = 22;
let boolean = true; 
let array = [];
let object = {};
let func = () => {};
let date = new Date();

// na convensão é sempre preferencial usar const do que let, quando a variavel não for modificado usar const
// Má prática ( Não recomendado )

// 1 - Nomes em outro idioma
// 2 - Abreviações
// 3 - Enumeração
// 4 - Incoerência

// ex de má prática:

const tamanhodecalça = "PP"; // 1
const btnn = "Um botão qualquer"; // 2

const text1 = "Primeiro texto"; // 3
const text2 = 3011; // 3 e 4

// Boas prática ( Recomendado )

// 1 - Nomes em inglês
// 2 - Evitar enumerar
// 3 - camelCase
// 4 - Nome explicativo

// ex de boa prática:

const username = "devmelo";
const isActive = true;
const savedCatsAmount = 450;
const mainAppDirectoryPath = "src/main";
const processCurrentWorkDirectory =  process.cwd();

// unicos caracteres especiais que podem existir em uma variavel é $ e _ 


const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let name;

prompt.question("Qual é o seu nome? ", answer => {
    name = answer;
    prompt.close();    
})

prompt.on("close", () => {
    console.log("Seja bem vindo!", name);
    
})

console.log(name);

