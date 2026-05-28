// formas de exportar 
// modules.exports = {  }

// const math = require("./functions/math") // FORMATO ANTIGO

// Para usar o novo formato para imports precisa add uma propriedade type:"module" no package.json
// export function ou na variavel

// const math = require("./functions/math")
// import {sum, sub, mul, div, isEven, pow} from "./functions/math.js";
import math from "./functions/math.js";
// const {emojiCat} = require("./constants/emojis")
import {emojiCat} from "./constants/emojis.js";

//Importando execuções
import "./hello.js";

console.log(math.sum(20, 2));
console.log(math.sub(20, 2));
console.log(math.div(20, 2));
console.log(math.mul(20, 2));
console.log(math.pow(20));
console.log(math.isEven(843));
console.log(emojiCat);