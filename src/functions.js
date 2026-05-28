// Funções:
// Function Declaration tem comportamento Hoisting, a função inteira é “levantada” na memória.
// Function Expression e Arrow Function, não tem o mesmo comportamento já que são atribuidas a uma variável.

// Facilidades de uma Arrow Function
const sum = (a, b) => a + b; // onde a 'seta' já aponta para o retorno, só funciona se não tiver mais de uma linha de codigo.

// Fatorial
// 5*4*3*2*1

function fatorial(number){
    let res = 1;
    for(let i = 1; i <= number; i++){
        res *= i;
    }
    return res;
}

console.log(fatorial(8));

// IIFE - Immediately invoked function expression
// Expressão de função invocada imediatamente.
// não é possivel chama-la novamente.

((name) => {
    console.log("Seja bem vindo(a)", name)
})("Felipe")



// Parametros Opcionais
function createTag(name, prefix, suffix){
    if(prefix && suffix) {return `${prefix}, ${name} ${suffix}`};
    if(prefix) {return `${prefix}, ${name}`};
    return name;
}

const tag = createTag("Felipe", "[Developer]", "Dev");
console.log(tag);

// Passando valores padroes para argumentos em funções

function pow(number, exponent=2){
    return number ** exponent;
}

console.log(pow(3));
console.log(pow(3, 9));

