let productsUnit = localStorage.getItem("productsUnit");
console.log(productsUnit);
let currentProduct = JSON.parse(productsUnit);

let container = document.getElementById('container');

let allcolumns = currentProduct.map(aCurrentProduct => {
     
 return`    
  <div class="col-12 col-md-6 mt-4 mt-md-0 p-md-5">
    <div class="card text-center">
      <div class="card-body">
        <h2 class="card-title">${aCurrentProduct.name}</h2>
        <img src="${aCurrentProduct.image}"></img>
        <div class="rowPrice text-center">
            <h4>${aCurrentProduct.price}€</h4>
        </div>
      </div>
    </div>
  </div>
 `
  
}).join("")
container.insertAdjacentHTML("afterbegin",allcolumns)

//formulaire

document.getElementById("validez").addEventListener("submit", function(e){

var error;
var lastName = document.getElementById("lastName");
var firstName = document.getElementById("firstName");
var email = document.getElementById("email");
     
if (!email.value) {
  error = "veuillez renseigner votre e-mail";
} else if(!emailValid(email.value)){
  error = "adresse e-mail non valide!";
}
   
if (!firstName.value) {
  error = "veuillez renseigner votre prénom";
} else if(!firstNameValid(firstName.value)){
  error = "votre prénom sans accent ni apostrophe!";
}  

if (!lastName.value) {
  error = "veuillez renseigner votre nom";
} else if(!lastNameValid(lastName.value)){
  error = "votre nom écrit en majuscule s'il vous plaît!";
} 

if (error) {
  e.preventDefault();
  document.getElementById("error").innerHTML = error;
  return false;
} else {
      alert('formulaire envoyé!');
}
})

function lastNameValid(lastName){
  return /^[A-Z]+$/.test(lastName);
}

function firstNameValid(firstName){
  return /^[a-aA-Z]+$/.test(firstName);
}

function emailValid(email){
  return /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email);
}

  



 





