// Operadores que podem ser usados junto a desestruturação
//  Spread e Rest

// ABAIXO TUDO SOBRE REST
const positive = [1,2,3,4];
const negative = [-1,-2,-3,-4];

const numbers = [...positive, ...negative];
const [one, two, ...other] = numbers;

// console.log(one, two);
// console.log(other);

const player2 = {
    name: "Felipe",
    health: 200,
    inventory:{
        items: ["sword", "shield", "bow"],
        potions:[               
            {type:"regeneration", duration: 8},
            {type:"defense", duration:9}   
        ]
    },
}

const { inventory, ...playerInfo } = player2;
console.log(playerInfo);
console.log(inventory);


// ...obj
// ABAIXO TUDO SOBRE SPREAD

const positive1 = [1,2,3,4];
const negative1 = [-1,-2,-3,-4];

const numbers1 = [...positive, ...negative]

// console.log(numbers);


const person = { name: "Felipe" };
const newPerson = { ...person, age: 36 }
// console.log(person);
// console.log(newPerson);


const player = {
    name: "Felipe",
    health: 200,
    inventory:{
        items: ["sword", "shield", "bow"],
        potions:[               
            {type:"regeneration", duration: 8},
            {type:"defense", duration:9}   
        ]
    },
}

function updatePlayer(plyer, newProps){
    return { ...player, ...newProps }    
}

const updatedPlayer = updatePlayer(player, {
    name: "SkaterfeL",
    coins: 10000,
})

// console.log(updatedPlayer);
// console.log({...player});
// console.log({...updatedPlayer});
