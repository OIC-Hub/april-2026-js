console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.sqrt(16));
console.log(Math.abs(6));
console.log(Math.abs(-8));
console.log(Math.pow(2, 3));

console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(6.7));
console.log(Math.round(6.2));

console.log(Math.max(23, 12, 2, 99, 89));
console.log(Math.min(23, 12, 2, 99, 89));
console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(Math.random() * 8) + 90);

function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let random1 = generateRandom(1000, 9999);
console.log(random1);

function luckyNumber(){
    let myRandom = generateRandom(1, 100);

    document.getElementById('result').innerHTML = `Your lucky number is ${myRandom}`;
}

function computeHighest(){
    let myRandom1 = generateRandom(1, 100);
    let myRandom2 = generateRandom(1, 100);
    let max = Math.max(myRandom1, myRandom2);

    document.querySelector('#result2').innerHTML = `The first generated number is ${myRandom1} and the second generated number is ${myRandom2}. The highest number is ${max}`;
}








