// Desestruturação

function main(){
    const person = {
        name: "Felipe",
        age: 36,
        isProgrammer: true
    };

    const { name, age, isProgrammer } = person;
    console.log(name, age, isProgrammer)
}

function main2(){
    const colors = ["verde","amarelho","azul","rosa","laranja"];
    const [firstColor, secondColor] = colors;
    console.log(firstColor, secondColor);
}

function main3(){
    const name = "Dev Melo"
    const player ={
        name: "Felipe",
        health: 200,
        inventory:{
            items: ["sword", "shield", "bow"],
            potions: 
            [               
                    {type:"regeneration", duration: 8},
                    {type:"defense", duration:9}   
            ]
        },
    }

    const { name: nickname, health } = player;
    const { inventory } = player;
    const { items, potions } = inventory;
    const [firstPotion, secondPotion] = potions;
    const { type, duration } = firstPotion;
    const { type: secondType, duration: secondDuration } = secondPotion;

    const { inventory: { potions: [{ type1, duration1 }] }} = player;
    // const type1 = player.inventory.potions[0].type; Faz a mesma coisa que a linha de cima para a variavel type1

    console.log(nickname, name);
    console.log(potions);
    console.log(items);
    console.log(firstPotion);
    console.log(secondPotion);
    console.log("Tipo:", type, "| Duration:", duration);
    console.log("Tipo:", secondType, "| Duration:", secondDuration);


}

main3()