localStorage.setItem("name", "John Doe");
localStorage.setItem("age", 30);
localStorage.setItem("city", "New York");
localStorage.setItem("is_active", false);

const fruits = ["Apple", "Banana", "Mango"];
localStorage.setItem('fruits', JSON.stringify(fruits));

const person = {
    name: "Ifeoluwa",
    age: 11,
    gender: "female"
};

localStorage.setItem('person', JSON.stringify(person));

console.log(localStorage.getItem('name'));

let myfruit = JSON.parse(localStorage.getItem('fruits'));
console.log(myfruit);
console.log(myfruit[0]);

let myperson = JSON.parse(localStorage.getItem('person'));
console.log(myperson);
console.log(myperson.age);

console.log(localStorage.length);

localStorage.removeItem('age');
// localStorage.clear();

let users = [];
async function getUsers(){
    try{
        const fetchData = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: "Bearer hchcjdjcjc"
            },
            // body: JSON.stringify({

            // })
        };

        let url = 'https://dummyjson.com/users?limit=0&sortBy=firstName&order=asc';

        let response = await fetch(url, fetchData);
        let data = await response.json();
        console.log(data);
        users = data.users;
        console.log(users);

        let usersArray = users.map(function(value){
        return `
            <div class="shadow text-center p-4 mb-10">
                <img src="${value.image}">
                <p>${value.firstName} ${value.lastName}</p>
                <p>Role: ${value.role}</p>
                <p>Gender: ${value.gender}</p>
                <p>Address: ${value.address.address}, ${value.address.city}, ${value.address.state}, ${value.address.country}</p>
                <button onclick="followUser(${value.id})" class="border bg-green-500 text-white p-3 hover:cursor-pointer">Follow</button>
            </div>
        `
        });

        document.getElementById('users').innerHTML = usersArray.join("");  
    } catch(error){
        console.log(error);
        document.querySelector('#errorUser').innerHTML = "Error loading users..."
    } finally{
        console.log("Fetching completed");
    }
}

getUsers();


function followUser(id){
    // alert("Followed " + id);
    let followUser = users.find(value => value.id === id);
    // let followUser = users.find(function(value){
    //     return value.id === id;
    // }); 
    console.log(followUser);
    if(!followUser){
        alert("User not found");
        return;
    }

    let allFollowers = JSON.parse(localStorage.getItem('myfollowers')) || [];

    let checkFollow = allFollowers.find(value => value.id === followUser.id);
    if(checkFollow){
        alert("User already followed");
        return;
    }
    followUser.quantity = 1;
    allFollowers.push(followUser);

    localStorage.setItem('myfollowers', JSON.stringify(allFollowers));
    alert("User followed");
    document.querySelector('#followCount').innerHTML = allFollowers.length;
}

let present = "";
let a = present || 500;
console.log(a);

let followLength = JSON.parse(localStorage.getItem('myfollowers')) || [];

document.querySelector('#followCount').innerHTML = followLength.length;