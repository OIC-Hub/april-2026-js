let num1 = 50;
console.log(typeof num1);

let num1New = num1.toString();
console.log(typeof num1New);

let num2 = 24.50699;
console.log(num2.toExponential(2));

console.log(num2.toFixed(2));
console.log(num2.toFixed(3));
console.log(num2.toFixed(5));

console.log(num2.toPrecision(2));
console.log(num2.toPrecision(3));
console.log(num2.toPrecision(5));
console.log(num2.toPrecision(6));

let num3 = 0.005699;
console.log(num3.toPrecision(2));

let num4 = 56;
console.log(num4.toPrecision(4));

console.log(parseInt(46));
console.log(parseInt(46.9));
console.log(parseInt("aaa 2"));
console.log(parseInt("2 is aaa"));

console.log(parseFloat(46));
console.log(parseFloat(46.9));
console.log(parseFloat("aaa 2"));
console.log(parseFloat("2 is aaa"));

console.log(Number.isInteger(2.5));
console.log(Number.isInteger(2));
console.log(Number.isInteger("2 is aaa"));

console.log(isNaN(222));
console.log(isNaN("aaa"));

let yearForm = document.querySelector('#yearForm');
yearForm.addEventListener('submit', function(e){
    e.preventDefault();

    let year = Number(yearForm['year'].value.trim());    
    let message = "";

    // the above and below are the same thing
    // if(!year)
    if(year === ""){
        message = "Enter your year of birth";
    } else if(isNaN(year)){
        message = "You are only allowed to input a number";
    } else if (!Number.isInteger(year)){
        message = "You are only allowed to input an integer";
    } else if(year < 1900){
        message = "Minimum year of birth is 1900";
    } else if(year > new Date().getFullYear()){
        message = "You cannot be above the present year";
    } else {
        let age = new Date().getFullYear() - year;
        message = `You are ${age} years old`;
    }

    document.querySelector('#display').innerHTML = message;

})
