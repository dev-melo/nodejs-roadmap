const numbers = [2,5,7,9];
numbers.push(1);
console.log(numbers[0]);
console.log(numbers);

const names = ["Felipe", "Iori", "Sueli", "Jose"];
console.log(names);
console.log(names[1]);

for(let i = 0;i<names.length;i++){
    names[i] += " Melo";
}
console.log(names);

// metodos de arrays

names.length;
names.push("Familia Melo"); // add ao final
names.push("Familia Melo"); // add ao final
console.log(names);

names.pop(); // remove o ultimo nome.
console.log(names);

names.shift(); // remove o primeiro item
console.log(names);

names.unshift("Felipe Melo"); // add no inicio do array
console.log(names);

const arrayCrazy = ["text", 1, false, new Date()]; // pra quem vem de Java ver isso é loucura. rs
console.log(arrayCrazy);
