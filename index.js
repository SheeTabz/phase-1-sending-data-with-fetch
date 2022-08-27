// Add your code here

function SubmitData(userName, userEmail) {
    fetch('http://localhost:3000/users',{
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        {
            "name": userName,
            "email": userEmail,
        }
      ),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => alert(err.message))
    
}
SubmitData("Shee", "shee@gmail.com")





















// let name = "Steve"
// let email = "steve@steve.com"

// function submitData(userName, userEmail){



// fetch('http://localhost:3000/users',{
//     method : 'POST',
//     header :{
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body : JSON.stringify({
//         name : userName,
//         email : userEmail
//       })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => alert(err.message));

// }
// console.log(submitData (name, email))


    
// let name = "Shee"
// let email = "shee@shee.com"