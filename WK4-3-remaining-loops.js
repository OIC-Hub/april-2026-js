let myText = document.querySelector('#text1');
let i = 1;
while(i <= 20){
    myText.innerHTML += i + "<br>";
    i++;
}

const myArr = [10, 20, 30, 40, 50];
let j = 0;
let sum = 0;
while(j < myArr.length){
    sum += myArr[j]; 
    j++;
}
console.log(sum);


let k = 1;
do{
    console.log(k);
    k++;
} while(k <= 10);

let l = 400;
do{
    console.log(l);
    l++;
} while(l <= 10);

const car = {
    name: "Toyota",
    model: 2024,
    mileage: 20,
    color: "black"
};

for(let key in car){
    // console.log(key);
    console.log(car[key]);  
}

const myArr2 = [10, 20, 30, 40, 50];
let sum2 = 0;
for(let value of myArr2){
    // console.log(value);
    sum2 += value;
}
console.log(sum2);

const employees = [
  { id: 101, name: "Alice", dept: "Engineering", salary: 95000, experience: 6 },
  { id: 102, name: "Bob", dept: "Marketing", salary: 55000, experience: 2 },
  { id: 103, name: "Charlie", dept: "Engineering", salary: 120000, experience: 10 },
  { id: 104, name: "Diana", dept: "HR", salary: 62000, experience: 4 },
  { id: 105, name: "Ethan", dept: "Engineering", salary: 88000, experience: 5 },
  { id: 106, name: "Fiona", dept: "Marketing", salary: 72000, experience: 7 },
  { id: 107, name: "George", dept: "Support", salary: 48000, experience: 1 },
  { id: 108, name: "Hannah", dept: "HR", salary: 75000, experience: 8 },
  { id: 109, name: "Ian", dept: "Engineering", salary: 105000, experience: 3 },
  { id: 110, name: "Julia", dept: "Design", salary: 82000, experience: 5 }
];

let names = [];
for(let value of employees){
    // console.log(value);
    if(value.experience > 5){
        // console.log(value);
        names.push(value.name)
    }
}

console.log(names);
document.getElementById('text2').innerHTML = names.join(", ");


const lead = employees[0];

for (const key in lead) {
  switch (key) {
    case 'salary':
      // Hide sensitive data in logs
      console.log(`${key}: [REDACTED]`);
      break;
    case 'dept':
      console.log(`${key}: ${lead[key].toUpperCase()}`);
      break;
    default:
      console.log(`${key}: ${lead[key]}`);
  }
}
