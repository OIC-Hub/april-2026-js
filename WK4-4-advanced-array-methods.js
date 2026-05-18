const arr1 = [12, 89, 77, 46, 99];

let some1 = arr1.some(function (value, index, array) {
  // console.log(value);
  return value > 40;
});

console.log(some1);

let people = [
  {
    name: "Taiwo",
    balance: 40,
  },
  {
    name: "Kehinde",
    balance: 0,
  },
  {
    name: "Idowu",
    balance: 10,
  },
  {
    name: "Alaba",
    balance: 0,
  },
];

let some2 = people.some(function (value) {
  // console.log(value);
  let debt = value.balance > 0;
  return debt;
});

console.log(some2);

let every1 = arr1.every(function (value, index, array) {
  return value > 40;
});

console.log(every1);

let every2 = people.every(function (value) {
  return value.balance > 0;
});

console.log(every2);

// if no element meets the condition, find will return undefined
let find1 = arr1.find(function (value, index, array) {
  return value > 40;
});

console.log(find1);

let find2 = people.find(function (value) {
  return value.balance > 0;
});

console.log(find2.name);

let filter = arr1.filter(function (value) {
  return value > 40;
});

console.log(filter);

let filter2 = people.filter(function (value) {
  return value.balance > 0;
});

console.log(filter2);

const arr2 = [12, 89, 77, 46, 99];
let reduce1 = arr2.reduce(function (accumulator, value) {
  return (accumulator += value);
}, 0);
console.log(reduce1);

let reduce2 = arr2.reduce(function (accumulator, value) {
  return (accumulator -= value);
});
console.log(reduce2);

const employees = [
  {
    id: "USR-001",
    name: "Alex Rivera",
    role: "Senior Developer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    joined_date: "2023-05-12",
    email: "alex.rivera@company.com",
  },
  {
    id: "USR-002",
    name: "Jordan Smith",
    role: "UI/UX Designer",
    department: "Product",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    joined_date: "2024-01-15",
    email: "jordan.smith@company.com",
  },
  {
    id: "USR-003",
    name: "Sam Taylor",
    role: "Project Manager",
    department: "Operations",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
    joined_date: "2022-11-03",
    email: "sam.taylor@company.com",
  },
  {
    id: "USR-004",
    name: "Casey Chen",
    role: "QA Engineer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
    joined_date: "2023-08-20",
    email: "casey.chen@company.com",
  },
  {
    id: "USR-005",
    name: "Morgan Blake",
    role: "Marketing Lead",
    department: "Growth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
    joined_date: "2024-03-10",
    email: "morgan.blake@company.com",
  },
  {
    id: "USR-006",
    name: "Taylor Hayes",
    role: "Backend Engineer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor",
    joined_date: "2023-06-15",
    email: "taylor.hayes@company.com",
  },
  {
    id: "USR-007",
    name: "Riley Quinn",
    role: "Data Scientist",
    department: "Analytics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riley",
    joined_date: "2023-09-02",
    email: "riley.quinn@company.com",
  },
  {
    id: "USR-008",
    name: "Jamie Lee",
    role: "DevOps Engineer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie",
    joined_date: "2022-12-18",
    email: "jamie.lee@company.com",
  },
  {
    id: "USR-009",
    name: "Peyton Reed",
    role: "Product Manager",
    department: "Product",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peyton",
    joined_date: "2024-02-25",
    email: "peyton.reed@company.com",
  },
  {
    id: "USR-010",
    name: "Dakota Vance",
    role: "HR Specialist",
    department: "People",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dakota",
    joined_date: "2023-01-11",
    email: "dakota.vance@company.com",
  },
  {
    id: "USR-011",
    name: "Skyler Grey",
    role: "Full Stack Developer",
    department: "Engineering",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Skyler",
    joined_date: "2023-11-30",
    email: "skyler.grey@company.com",
  },
  {
    id: "USR-012",
    name: "Robin Banks",
    role: "Financial Analyst",
    department: "Finance",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robin",
    joined_date: "2024-04-05",
    email: "robin.banks@company.com",
  },
];

let myEmployees = document.querySelector('#employees');
employees.forEach(function(value, index){
    myEmployees.innerHTML +=
    `
    <div class="eachEmployee">
        <img src="${value.avatar}">
        <p>${value.name}</p>
        <p>Role: ${value.role}</p>
        <p>Department: ${value.department}</p>
    </div>
    `;
});

displayEmployees(employees);

function filterEmployee() {
    let search = document.querySelector('#search').value;

    let peopleFilter = employees.filter(function(value){
        return value.name.toLowerCase().includes(search.toLowerCase());
    });

    if(peopleFilter.length === 0){
        document.getElementById('employees2').innerHTML = "";
        document.querySelector('#notFound').classList.remove('hidden');
    } else {
        document.querySelector('#notFound').classList.add('hidden');
        displayEmployees(peopleFilter);
    }

}

function displayEmployees(employees){
  let employeeArray = employees.map(function(value){
      return `
          <div class="shadow text-center p-4 mb-10">
              <img src="${value.avatar}">
              <p>${value.name}</p>
              <p>Role: ${value.role}</p>
              <p>Department: ${value.department}</p>
          </div>
      `
  });

  document.getElementById('employees2').innerHTML = employeeArray.join("");
}