function moveOverMe(element){
    // alert("Thank you for moving over me.");
    console.log(element);
    element.style.color = "red";
    element.style.fontSize = "20px";
    // element.style.display = "none";   
}

function moveOut(){
    let myElem = document.querySelector('#myElement');
    myElem.style.color = "black";
    myElem.style.fontSize = "16px";
}

function pressKeydown(elem){
    console.log(elem.value); 
}

function pressKeyup(elem){
    console.log(elem.value);
    elem.value = elem.value.toUpperCase();
}

let myinput = document.getElementById('myinput');

myinput.addEventListener('input', function(){
    console.log(myinput.value);
});

let form1 = document.querySelector('#myform')

form1.addEventListener('submit', function(e){
    e.preventDefault();
    let text1 = document.querySelector('#text1');
    let result = document.querySelector('#result');

    result.innerHTML = text1.value;
})

let google = document.getElementById('google');
google.addEventListener('click', function(e){
    e.preventDefault();
});

let ageForm = document.getElementById('ageForm');
ageForm.addEventListener('submit', function(e){
    e.preventDefault();
    let useryear = document.getElementById('yearofbirth');

    let currentYear = new Date().getFullYear();

    let age = currentYear - useryear.value;
    
    let displayResult = document.getElementById('displayResult');

    if(age >= 18){
        console.log("You are greater than 18");
    }

    if(age >= 18){
        displayResult.innerHTML = "You are an adult and can vote";
    } else {
        displayResult.innerHTML = `You are a minor and cannot vote. Come back in ${18 - age} years time`;
    }
})
