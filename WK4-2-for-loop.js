for(let i = 1; i <= 20; i++){
    console.log(i);
}

let myText = document.querySelector('#text1');
for(let i = 1; i <= 20; i++){
    myText.innerHTML += i + "<br>";
}

for(let i = 1; i <= 10; i++){
    if(i === 6){
        continue;
    }
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i === 6){
        break;
    }
    console.log(i);
}

let sum = 0;
for(let i = 1; i <= 20; i++){
    sum += i;    
}

console.log(sum);

let sum1 = 0;
for(let i = 1; i <= 50; i++){
    if(i % 2 === 1){
        sum1 += i;
    }
}

console.log(sum1);

let sum2 = 0;
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }
    sum2 += i;
}

console.log(sum2);

let oddSum = 0;
let evenSum = 0
for(let i = 1; i <= 50; i++){
    if(i % 2 === 1){
        oddSum += i;
    } else {
        evenSum += i;
    }
}

console.log(`Odd sum: ${oddSum}, Even sum: ${evenSum}, Difference: ${evenSum - oddSum}`);

const myArr = [10, 20, 30, 40, 50];
console.log(myArr.length);

for(let count = 0; count < myArr.length; count++){
    // console.log(count);
    console.log(myArr[count]); 
}

let sum3 = 0;
for(let i = 0; i < myArr.length; i++){
    sum3 += myArr[i]; 
}
console.log(sum3);

