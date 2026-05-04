let myForm = document.querySelector('#scoreForm');

myForm.addEventListener('submit', function(e){
    e.preventDefault();

    let score = myForm['score'].value;
    
    let grade = "";
    let gradeElement = document.querySelector('#grade');

    gradeElement.classList.remove('text-red-500');
    gradeElement.classList.remove('text-green-500');

    if(score === ""){
        grade = "Enter your score";
        gradeElement.classList.add('text-red-500');
    } else if(score >= 70 && score2 <= 100){
        grade = "A";
        gradeElement.classList.add('text-green-500');
    } else if(score >= 60 && score2 <= 69){
        grade = "B";
        gradeElement.classList.add('text-green-500');
    } else if(score >= 50 && score2 <= 59){
        grade = "C";
        gradeElement.classList.add('text-green-500');
    } else if(score >= 45 && score2 <= 49){
        grade = "D";
        gradeElement.classList.add('text-green-500');
    } else if (score >= 40 && score2 <= 44){
        grade = "E";
        gradeElement.classList.add('text-green-500');
    } else if(score >= 0 && score2 <= 39){
        grade = "F";
        gradeElement.classList.add('text-green-500');
    } else {
        grade = "Invalid score. Please, enter a score between 0 and 100";
        gradeElement.classList.add('text-red-500');
    }
    
    gradeElement.innerHTML = grade;
})


let myForm2 = document.querySelector('#scoreForm2');

myForm2.addEventListener('submit', function(e){
    e.preventDefault();

    let score2 = myForm2['score2'].value;
    
    let grade2 = "";
    let gradeElement2 = document.querySelector('#grade2');

    gradeElement2.classList.remove('text-red-500');
    gradeElement2.classList.remove('text-green-500');

    switch(true){
        case score2 === "":
            grade2 = "Enter your score";
            gradeElement2.classList.add('text-red-500');
            break;
        case score2 >= 70 && score2 <= 100:
            grade2 = "A";
            gradeElement2.classList.add('text-green-500');
            break;
        case score2 >= 60 && score2 <= 69:
            grade2 = "B";
            gradeElement2.classList.add('text-green-500');
            break;
        case score2 >= 50 && score2 <= 59:
            grade2 = "C";
            gradeElement2.classList.add('text-green-500');
            break;
        case score2 >= 45 && score2 <= 49:
            grade2 = "D";
            gradeElement2.classList.add('text-green-500');
            break;
        case score2 >= 40 && score2 <= 44:
            grade2 = "E";
            gradeElement2.classList.add('text-green-500');
            break;
        case score2 >= 0 && score2 <= 39:
            grade2 = "F";
            gradeElement2.classList.add('text-green-500');
            break;
        default:
            grade2 = "Invalid score. Please, enter a score between 0 and 100";
            gradeElement2.classList.add('text-red-500');
            break;
    }
    
    gradeElement2.innerHTML = grade2;
})


let trafficForm = document.querySelector('#trafficForm');

trafficForm.addEventListener('submit', function(e){
    e.preventDefault();

    let color = trafficForm['color'].value;
    
    let result = "";
    let resultElement = document.querySelector('#result');

    switch(color){
        case "":
            result = "Enter color";
            break;
        case "yellow":
            result = "Get ready";
            break;
        case "green":
            result = "Go now";
            break;
        case "red":
            result = "Stop";
            break;
        default:
            result = "Invalid color";
            break;
    }

    resultElement.innerHTML = result;
})