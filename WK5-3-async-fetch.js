setTimeout(function(){
    // alert("Registraion successful");
    // window.location.href = "WK5-2-fetch.html";
    // window.location.reload();
}, 3000);

setInterval(function(){
    let today = new Date();
    document.querySelector('#time').innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}, 1000);

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