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

let users = [];

fetch('https://dummyjson.com/users?limit=0&sortBy=firstName&order=asc', fetchData)
// .then(function(response){
//     // console.log(response);
//     return response.json();
// })
.then(response => response.json())
.then(function(data){
    console.log(data);
    users = data.users
    console.log(users);

    let usersArray = users.map(function(value){
    return `
        <div class="shadow text-center p-4 mb-10">
            <img src="${value.image}">
            <p>${value.firstName} ${value.lastName}</p>
            <p>Role: ${value.role}</p>
            <p>Gender: ${value.gender}</p>
            <p>Address: ${value.address.address}, ${value.address.city}, ${value.address.state}, ${value.address.country}</p>
        </div>
    `
    });

    document.getElementById('users').innerHTML = usersArray.join("");
})
.catch(function(error){
    console.log(error);
    document.querySelector('#errorUser').innerHTML = "Error loading users..."
})
.finally(function(){
    console.log("Fetching completed");
    
})