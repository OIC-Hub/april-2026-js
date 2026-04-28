const course = {
    name: "Introduction to Object",
    code: "OBJ111",
    unit: 3,
    elective: false,
    pass: function(score){
        return score >= 50;
    },
    description: function(){
        return `${this.name} is a ${this.unit} units course that is compulsory for all students`;
    }
}

console.log(course.code);
console.log(course.name);
console.log(course['unit']);
console.log(course.pass(80));

console.log(course.description());


course.name = "Another name of the course";

console.log(course['name']);

const today = new Date();
console.log(today);

// present hour
console.log(today.getHours());
// present minute
console.log(today.getMinutes());
// present seconds
console.log(today.getSeconds());

// present time
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);

// present year
console.log(today.getFullYear());
// present month
console.log(today.getMonth());
// present date
console.log(today.getDate());

// present day
console.log(today.getDay());










