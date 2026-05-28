// E    -   OU  -   NÃO 
// &&   -   ||  -   !
// AND  -   OR  -   NOT

console.table([
    ["🧀","🍕", true],
    ["❌","🍕", false],
    ["🧀","❌", false],
    ["❌","❌", false],
])

const cake = true;
const pizza = true;

console.log(cake && pizza && true); // retorna true apenas quando todas operações são verdadeiras

console.table([
    ["🧀","🍕", true],
    ["❌","🍕", true],
    ["🧀","❌", true],
    ["❌","❌", false],
])

console.log(cake || pizza || false); // retorna true quando pelo menos uma operação é verdadeira

console.log();

console.log("! NÃO (NOT)");
console.log("🚪");

const isOpen = true;

console.log(!isOpen);





