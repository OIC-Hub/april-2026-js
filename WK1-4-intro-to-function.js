function greeting(){
    alert("Good afternoon");
}

// greeting();

function sum(a, b){
    let addition = a + b;
    console.log(addition);
}

sum(12, 18);
sum(11, 199);

function product(num1, num2){
    let multiply = num1 * num2;
    return multiply;
}

let answer1 = product(12, 10);
console.log(answer1);

let answer2 = product(12, 19);
console.log(answer2);

let display = document.getElementById('output');

function addInput(num){
    // alert("Thank you for clicking me");
    // alert(num);
    display.value += num;
}

function calculate(){
    display.value = eval(display.value);
}