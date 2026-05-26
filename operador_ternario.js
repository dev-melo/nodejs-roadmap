// Ternário

// (Expressão) ? se True : se False;
const number = 10;
console.log(number % 2 === 0 ? "Par" : "Ímpar");

const age = 12;
console.log(age >= 18 ? "Maior de idade " : "Menor de idade");

const isAdult = true;

console.log(`Cristiano ${isAdult ? "não ": ""}é criança`);


const hours = 20;
console.log("Está de", hours >= 0 && hours < 6 ? "Madrugada":
                         hours >= 6 && hours < 12 ? "Manhã":
                         hours >= 12 && hours < 18 ? "Tarde":
                         "Noite"
);
