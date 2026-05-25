let myfollowers = JSON.parse(localStorage.getItem('myfollowers')) || [];
if(myfollowers.length === 0){
    document.querySelector('#message').innerHTML = "Empty followers"
} else {
    let usersArray = myfollowers.map(function(value){
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

    document.getElementById('followers').innerHTML = usersArray.join("");
}