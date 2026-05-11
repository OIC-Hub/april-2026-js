// this is an object
const person = {
    name: "Ifeoluwa",
    age: 11,
    complexion: "caramel"
}

// this is an array
const fruits = ["Apple", "Mango", "Watermelon", 20];
console.log(fruits[0]);

fruits[1] = "Carrot";

console.log(fruits);

const cars = [
    {
        name: "Toyota",
        model: 2024,
        mileage: 20,
        color: "black"
    },
    {
        name: "Mercedes",
        model: 2024,
        mileage: 20,
        color: "red"
    },
    {
        name: "Hyundai",
        model: 2024,
        mileage: 20,
        color: "green"
    },
    {
        name: "Tesla",
        model: 2024,
        mileage: 20,
        color: "yellow"
    }
];

console.log(cars[0]);
console.log(cars[0].name);
console.log(cars[0]['mileage']);

console.log("Length is", cars.length);
console.log(Array.isArray(cars));

let num1 = 10;
console.log(Array.isArray(num1));

console.log(Object.keys(cars));
console.log(Object.values(cars));
console.log(Object.values(fruits));

console.log(Object.entries(cars));
console.log(Object.entries(fruits));

const myArr = [20, "Ade", "Egg", true];
console.log(myArr.fill("❤️"));

// fill will modify the original array
console.log(myArr);

console.log(myArr.join("++"));

const newArr = [1, 2, 3, 4, 5];
newArr.push("Ade");
console.log(newArr);

newArr.push("Ola", "Kunle", "Tafa");
console.log(newArr);

newArr.pop();

console.log(newArr);

let deleted1 = newArr.pop();
console.log(deleted1);
console.log(newArr);

newArr.unshift("Suweba");
console.log(newArr);

newArr.unshift("Sumola", "Agnes", "Felicia");
console.log(newArr);

newArr.shift();
console.log(newArr);

let deleted2 = newArr.shift();
console.log(deleted2);
console.log(newArr);

const newArr2 = ["Kiekie", "Christianah", "Wuraola", "Deborah", "Damilola"];
newArr2.splice(2, 1, "Olamide", "Xm", "Olanrewaju");
console.log(newArr2);

const newArr3 = ["Kiekie", "Christianah", "Wuraola", "Deborah", "Damilola"];
newArr3.splice(2, 0, "Olaniyi");
console.log(newArr3);

const newArr4 = ["Kiekie", "Christianah", "Wuraola", "Deborah", "Damilola"];
console.log(newArr4.slice(2));
console.log(newArr4.slice(2, 4));

console.log(newArr4.includes("Ifeoluwa"));
console.log(newArr4.includes("Damilola"));


console.log(fruits.concat(newArr4));

console.log(fruits.concat(newArr4, cars));










