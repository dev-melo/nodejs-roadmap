// Funções recursivas

function countDown(number) {
    if(number<1)return;
    setTimeout(() => {
        console.log(number);
        countDown(number - 1);
    }, 1000);
    
    // for(let i = number; i > 0; i-=10){
    //     console.log(i);
    // }
}

function sum(number, result=0){
    if(number <= 1){
        return result;
    }    
    return sum(number-1, result + number);
}

console.log(sum(1000));