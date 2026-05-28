function sum(a,b){
return a+b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

function mul(a,b){
    return a*b;
}

function pow(a, b=2){
        return a**b;
}

function isEven(a){
    if(a % 2 === 0){
        return true;
    } else {
        return false;
    }
}

export default { sum, sub, div, mul, isEven, pow }

/*
module.exports = { sum, sub, mul, div, 
    pow(a, b=2){
        return a**b;
    }, 
    isEven(a){
        if(a % 2 === 0){
            return true;
        } else {
            return false;
        }
    }

 };*/