// Classes 

class Game{
    static games = [];
    title;
    time;
    status = "idle";
    constructor(title, time){
        this.title = title;
        this.time = time;
        Game.games.push(this);
    }
    start(){
        this.status = "Progress.";
    }
    stop(){
        this.status = "Ended.";        
    }
    delete(){
        Game.games = Game.games.filter(game => game.title !== this.title);
    }
}
 const parkour = new Game("Parkour", 20);
 const puzzle = new Game("Puzzle", 20);

 console.log(Game.games);
 parkour.delete()
 console.log(Game.games);
 




















// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     intro(){
//         return `Meu nome é ${this.#name} e tenho ${this.#age} anos.`;    
//     }

//     getName(){
//         return this.#name;
//     }
//     getAge(){
//         return this.#age;
//     }

//     setName(newName){
//         this.#name = newName;
//     }
//     setAge(newAge){
//         this.#age = newAge;
//     }
// }

// const iori = new Person("Iori", 5);
// const felipe = new Person("Felipe", 36);

// console.log(iori.getName(), iori.getAge());
// console.log(iori.intro());
// console.log(felipe.intro());
// felipe.setAge(37);
// felipe.setName("Felipe L Melo");
// console.log(felipe.intro());