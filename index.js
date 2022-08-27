// Add your code here

const form = document.getElementById('form-submit')  
const dogNaame = form.dogName.value
const breedName = form.dogBreed.value
console.log(breedName)

form.addEventListener("submit",() => submitData(userName, userEmail))
function submitData(userName, userEmail) {
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
    .then(data => data)
    .catch(err => alert(err.message))
    
}




submitData("Shee", "shee@gmail.com")




















