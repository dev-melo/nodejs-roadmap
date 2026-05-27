const player = 
{
    name: "Felipe",
    health: 20,
    age: 36,
    isDead: false,
    present(){ // criando metodos dentro do objeto
        console.log("Meu nome é", this.name);
        
    } 
};

player.present();
console.log(player);

// acessando propriedades e metodos dos objetos
console.log(player["name"], " < usando []");
console.log(player.name, " < usando .");

for( const prop in player){
    console.log(prop);
    
}

const computer = 
{
    motherboard: "B360M",
    videoCard: "RTX 5050",
    cpu:"Intel i7 8700",
    font:{
        name: "XPG Core Reactor",
        watts: 800 
    },
    case: {
        name: "Draco GameMax",
        color: "black"
    },
    ram: [
        {
            name: "HyperX",
            size: 16000
        },
        {
            name: "HyperX",
            size: 16000
        }
    ]
};

console.log(computer);
