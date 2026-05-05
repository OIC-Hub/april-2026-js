let sen1 = "Ade is going to school.";
console.log("Length is", sen1.length);

let sen2 = "    Ade is going to school.    ";
console.log("Sen2 Length is", sen2.length);

console.log("Char At index 5 is", sen1.charAt(5));
console.log("Char At index 9 is", sen1.charAt(9));

console.log("Char Code At index 5 is", sen1.charCodeAt(5));
console.log("Char Code At index 9 is", sen1.charCodeAt(9));

let firstName = "Oga";
let lastName = "Niyi";
let fullName = firstName.concat(" ", lastName, " is very handsome and nice.");
console.log(fullName);

console.log("Index of s is", sen1.indexOf('s'));
console.log("Index of going is", sen1.indexOf('going'));

// index of something that does not exist is -1
console.log("Index of aaa is", sen1.indexOf('aa'));

console.log("Last Index of s is", sen1.lastIndexOf('s'));

let sen3 = "Coding is very easy. Coding is also very sweet.";

// replace does not modify the original string
let sen4 = sen3.replace("easy", "hard");
console.log(sen3);
console.log(sen4);

let sen5 = sen3.replace(/coding/i, "Mathematics");
console.log(sen5);

let sen6 = sen3.replaceAll("Coding", "Mathematics");
console.log(sen6);

// you can also use replace to replace all occurrence
// but with global regex
let sen7 = sen3.replace(/Coding/g, "Mathematics");
console.log(sen7);

let sen8 = "We are going to do the assignment.";
let slice1 = sen8.slice(5);
console.log(slice1);

let slice2 = sen8.slice(5, 10);
console.log(slice2);

let slice3 = sen8.slice(-5);
console.log(slice3);

// this won't work
let slice4 = sen8.slice(-5, -9);
console.log(slice4);

let slice5 = sen8.slice(-5, -2);
console.log(slice5);

// substring is the same as slice but does not accept negative
let substring1 = sen8.substring(5);
console.log(substring1);

let substring2 = sen8.substring(5, 10);
console.log(substring2);

let substring3 = sen8.substring(-5);
console.log(substring3);


let substr1 = sen8.substr(5);
console.log(substr1);

let substr2 = sen8.substr(5, 4);
console.log(substr2);







