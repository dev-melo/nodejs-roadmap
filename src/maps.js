// Maps

const users = new Map([
    ["kiboo", {age: 7, coins: 1020}]
]);
users.set("iori", {age:5, coins: 22092020});
users.set("felipe", {age:36, coins: 24111989});
users.set("sueli", {age:58, coins: 5081967});
users.set("jose", {age:61, coins: 16091964});


for(const [key, value] of users.entries()){
    console.log(key);
    console.log(value);

    
}
// const users = {
//     felipe: {
//         age: 36,
//         coins: 103456,
//     },
//     iori: {
//         age: 6,
//         coins: 14400,
//     },
//     melos: {
//         age: 22,
//         coins: 1100,
//     }
// }

// users["matheus"] = { age: 10, coins: 1010};

// console.log(users);
// console.log(users.get("iori"));


