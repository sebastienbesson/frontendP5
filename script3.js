let productsUnit = localStorage.getItem("productsUnit");
console.log(productsUnit);
let currentProduct = productsUnit?JSON.parse(productsUnit):[];

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

// Supprimer un produit du panier
/*
clear.onclick = () => {
  let currentProduct = JSON.stringify(productsUnit);
  localStorage.removeItem("productsUnit");
  document.location.reload();  
}  
*/
//montant total du panier
console.log(currentProduct);
let totalPrice = [];
for (let p = 0; p < currentProduct.length; p++){
  let totalPriceBasket = currentProduct[p].price;
  totalPrice.push(totalPriceBasket);
  console.log(totalPrice);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const finalPrice = totalPrice.reduce(reducer, 0);
console.log(finalPrice);

const showFinalPrice = `
<div class="Finalprice col-12 text-center">Mon total achat est de: <br>
<H4>${finalPrice} €</H4>
</div>
`
container.insertAdjacentHTML("beforeend", showFinalPrice);

//récupération des id
let totalProducts = [];
for (let r = 0; r < currentProduct.length; r++){
  let totalProductsBasket = currentProduct[r].ref;
  totalProducts.push(totalProductsBasket);
  console.log(totalProducts);
}


//vider le panier
/*
const clearBasket = `
<button class="ClearBasket col-12 text-center">Vider le panier</button>
`
container.insertAdjacentHTML("beforeend", clearBasket);
const clearAllBasket = document.querySelector(".ClearBasket");
clearAllBasket.addEventListener('click', (e) => {
  e.preventDefault;
  localStorage.removeItem("productsUnit");
  alert("le panier est vide");
  window.location.href="panier.html";  
});
*/
//formulaire

document.getElementById("validate").addEventListener("submit", function(e){

var error;

var lastName = document.getElementById("lastName");
var firstName = document.getElementById("firstName");
var email = document.getElementById("email");
var address = document.getElementById("address");
var city = document.getElementById("city");

if (!city.value) {
  error = "veuillez renseigner votre ville";
} else if(!cityValid(city.value)){
  error = "ville non valide!";
};

if (!address.value) {
  error = "veuillez renseigner votre adresse";
} else if(!addressValid(address.value)){
  error = "votre adresse sans accent ni ponctuation";
};

if (!email.value) {
  error = "veuillez renseigner votre e-mail";
} else if(!emailValid(email.value)){
  error = "adresse e-mail non valide!";
};
   
if (!firstName.value) {
  error = "veuillez renseigner votre prénom";
} else if(!firstNameValid(firstName.value)){
  error = "votre prénom sans accent ni apostrophe!";
};  

if (!lastName.value) {
  error = "veuillez renseigner votre nom";
} else if(!lastNameValid(lastName.value)){
  error = "votre nom écrit en majuscule s'il vous plaît!";
}; 

if (error) {
  e.preventDefault();
  document.getElementById("error").innerHTML = error;
  return false;
} else {
  e.preventDefault();
  const finalSend = {
    products: totalProducts,
    contact: {
      lastName: lastName.value,
      firstName: firstName.value,
      email: email.value,
      address: address.value,
      city: city.value
    }
  }
  console.log(finalSend);
  
  fetch('http://localhost:3000/api/furniture/order', {
        method: "POST",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalSend),
      })
      .then(function(response){
        return response.json()
      })
      .then(function(finalSend){
        console.log('tout bon');
        console.log(finalSend);
      })
    }    
});
/*
let contact = {
  lastName: lastName.value,
  firstName: firstName.value
}
console.log(contact);
*/


function lastNameValid(lastName){
  return /^[A-Z]+$/.test(lastName);
};

function firstNameValid(firstName){
  return /^[a-zA-Z-]+$/.test(firstName);
};

function emailValid(email){
  return /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(email);
};

function addressValid(address){
  return /^[A-Za-z0-9'\.\-\s\,]+$/.test(address);
};

function cityValid(city){
  return /^[A-Za-z'\.\-\s\,]+$/.test(city);
};

//premier essai fetch post
function send(e) {
  e.preventDefault();
  fetch('http://localhost:3000/api/furniture/order', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(totalProducts)
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(totalProducts) {
    console.log('tout bon', finalSend);
  });
} 

//deuxieme essai fetch post

    
  


  




