//Récupération des clés/valeurs localstorage

let productsUnit = localStorage.getItem("productsUnit");
console.log(productsUnit);

//Création d'un tableau regroupant les produits sélectionnés

let currentProduct = productsUnit?JSON.parse(productsUnit):[];

//Mise en place et affichage HTML des produits

let container = document.getElementById('container');

let allcolumns = currentProduct.map(aCurrentProduct => { 
  return`    
    <div class="col-12 col-md-${currentProduct.length==1?'12':'6'} mt-4 mt-md-0 p-md-5">
      <div class="card text-center">  
        <div class="card-body">
          <h2 class="card-title" id="basketNameProduct">${aCurrentProduct.name}</h2>
            <img src="${aCurrentProduct.image}"></img>
              <div class="rowPrice text-center">
                <span>${aCurrentProduct.price}€</span>
              </div>
        </div>  
      </div>
    </div>
 `
}).join("")

container.insertAdjacentHTML("afterbegin",allcolumns)

//Calcul du montant total du panier

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

//Affichage HTML du montant total du panier

const showFinalPrice = `
<div class="finalPrice col-12 text-center">Mon total achat est de: <br>
  <span id="finalPriceResult">${finalPrice}€</span>
</div>
`

container.insertAdjacentHTML("beforeend", showFinalPrice);

//Récupération des ids des produits sélectionnés

let totalProducts = [];

for (let r = 0; r < currentProduct.length; r++){
  let totalProductsBasket = currentProduct[r].ref;
  totalProducts.push(totalProductsBasket);

  console.log(totalProducts);
}

//Suppression du contenu du panier

const clearBasket = `
<button class="clearBasket col-12 text-align">Vider le panier</button>
`
container.insertAdjacentHTML("beforeend", clearBasket);


const clearAllBasket = document.querySelector(".clearBasket");

clearAllBasket.addEventListener('click', (e) => {
  e.preventDefault;
  localStorage.removeItem("productsUnit");
  alert("le panier est vide");

  window.location.href="panier.html";  
});

//Création du formulaire

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
  error = "votre prénom écrit sans accent";
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

//Envoi des données du formulaire et des produits sélectionnés avec fetch

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
    console.log(finalSend);
    console.log(finalSend.orderId);
    localStorage.setItem("commandId", finalSend.orderId);
    console.log(finalPrice);
    localStorage.setItem("totalCommand", finalPrice);
    window.location = "commande.html";
  })
}    
});

//Vérification avec Regex des données du formulaire

function lastNameValid(lastName){
  return /^[A-Z-]+$/.test(lastName);
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






