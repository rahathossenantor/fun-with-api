// function displayData() {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
//     xhr.onload = function(){
//         const res = JSON.parse(xhr.response)
//         console.log(res)
//     }
//     xhr.onerror = function(){
//         console.log("Sorry! We are unable to load data!");
//     }
//     xhr.send()
// }
// displayData()

function countUser(){
    const userCount = parseInt(document.getElementById("user-count").value)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        data = data.slice(0, userCount)

        const usersNames = document.getElementById("users-names")
        usersNames.innerHTML = ""
        document.getElementById("users-data").innerHTML = ""

        data.map((element) => {
            const user = element
            const p = document.createElement("p")
            p.innerHTML = `<strong>${user.name}</strong> <button onclick="getUserDetails(${user.id})">Details ${user.id}</button>`
            usersNames.appendChild(p)
        })
    })
}

function getUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        const userData = document.getElementById("users-data")

        userData.innerHTML = 
        `
        <h3>Name: ${data.name}</h3>
        <h4>Email: ${data.email}</h4>
        <p>Phone: ${data.phone}</p>
        <p>Website: ${data.website}</p>
        <p>Address: ${data.address.street}, ${data.address.city}</p>
        `
    })
}