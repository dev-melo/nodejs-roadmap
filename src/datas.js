    // Datas
// const past = new Date(1780103666310);
// const date = new Date();
// console.log(date);
// console.log(date.getDay()); // retorna o indice do dia da semana,
// console.log(date.getDate());
// console.log(date.getTime()); // retorna o tempo em milisegundos.

// console.log(past);
// console.log(past.getDay()); // retorna o indice do dia da semana,
// console.log(past.getDate());

// console.log("Add 5 horas a data.");
// console.log(date.toString(), "Hora atual");
// date.setHours(date.getHours() + 5); // setar horas 
// console.log(date.toString(), "5 Horas a frente");


// date.setDate(date.getDate()+10);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());


// const timer = setInterval(()=>{
//     const date = new Date();
//     console.log(date.getSeconds());
//     if(date.getSeconds() > 30) clearInterval(timer);
// }, 500);

const past = new Date(2024, 11, 25);
const present = new Date();
const future = new Date(2027, 9, 29);

console.log(past.toLocaleString());
console.log(present.toLocaleString());
console.log(future.toLocaleString());

if( past > present){
    console.log("Já passou");
} else {
    console.log("Não passou ainda")
}