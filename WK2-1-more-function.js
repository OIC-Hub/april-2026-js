function sum(a, b){
    let addition = a + b;
    return addition;
    // return a + b;
}

let firstNum = prompt("Enter the first number");
let secondNum = prompt("Enter the second number");

// let result = sum(Number(firstNum), Number(secondNum));
let result = sum(parseFloat(firstNum), parseFloat(secondNum));
// let result = sum(parseInt(firstNum), parseInt(secondNum));


console.log(result);
document.getElementById('result').innerHTML = `The sum of ${firstNum} and ${secondNum} is ${result}`;