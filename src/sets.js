// // Sets

// const numbers = new Set([1,1,2,3,4,5,3,6,6,7,8,9,10])
// numbers.add(22);
// numbers.add(22);

// numbers.delete(1);

// numbers.has(2);

// for(const number of numbers.values()){
//     console.log(number);
// }
// console.log();

// numbers.forEach((n) => {
//     console.log(n);
    
// })

// console.log(numbers);
// console.log(numbers.size);
// numbers.clear();
// console.log(numbers);


import { text } from "@clack/prompts";

async function main() {
    const input = await text({message: "Digite varios numeros"});

    const inputNumbers = input.split(" ").map(Number);
    const numbers = new Set(inputNumbers);

    console.log(inputNumbers);
    console.log(numbers);
    
}

main();