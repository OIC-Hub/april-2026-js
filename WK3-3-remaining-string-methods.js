let sen1 = "Ade Is going to school.";
let split1 = sen1.split(" ");
console.log(split1);

let split2 = sen1.split("going");
console.log(split2);

let split3 = sen1.split("going to");
console.log(split3);

let split4 = sen1.split("");
console.log(split4);

console.log(sen1.toUpperCase());
console.log(sen1.toLowerCase());

let sen2 = "tunde is very Stubborn";
let firstChar = sen2.charAt(0).toUpperCase();
let remainingSentence = sen2.slice(1).toLowerCase();
let finalSentence = firstChar.concat(remainingSentence);
console.log(finalSentence);

let sen3 = "      Ade is going        to the market        ";
console.log(sen3.length);
console.log(sen3.trim());
console.log(sen3.trim().length);

console.log(sen3.trimStart());
console.log(sen3.trimStart().length);

console.log(sen3.trimEnd());
console.log(sen3.trimEnd().length);

let num1 = "53";
let pad1 = num1.padStart(4, 0);
console.log(pad1);

let num2 = 2;
let pad2 = num2.toString().padStart(3, "x");
console.log(pad2);

let pad3 = num2.toString().padEnd(3, "x");
console.log(pad3);

let fname = "Ife";
let repeat1 = fname.repeat(4);
console.log(repeat1);

let num3 = "2";
let repeat2 = num3.repeat(4);
console.log(repeat2);

let myform = document.querySelector('#myform');
myform.addEventListener('submit', function(e){
    e.preventDefault();

    let userInput = document.querySelector('#input').value.trim();
    let message = "";

    if(userInput === ""){
        message = "Enter your account number";
    } else if(userInput.length != 10){
        message = "Enter your account number in length of 10";
    } else {
        let slice1 = userInput.slice(0, 3)
        let slice2 = userInput.slice(3, 6);
        let slice3 = userInput.slice(6);

        message = `${slice1}xxx${slice3}`
    }

    document.querySelector('#result').innerHTML = message;

})









