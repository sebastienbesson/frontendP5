//Récupération l'id du produit sélectionné de l'url

let params = new URLSearchParams(document.location.search.substring(1)); 
let id = params.get("id");
console.log(id);

//Récupération des datas du serveur du produit sélectionné depuis son id avec fetch 

fetch('http://localhost:3000/api/furniture/'+id)
.then(response => {return response.json()})
.then(data => {
  console.log(data);
  clickValid.onclick = ()=> {
  console.log(data);
    const productUnit = {
      name: data.name,
      image: data.imageUrl,
      price: data.price,
      ref: data._id,
      varnish: data.varnish,
    }

//Création d'une clé/valeur dans localstorage avec tableau pour pouvoir ajouter les produits sélectionnés dans la clé
    
  let currentProduct = localStorage.getItem("productsUnit");

  if(!currentProduct){
    currentProduct= [];
  }else{currentProduct= JSON.parse(currentProduct)};
  currentProduct.push(productUnit);
  localStorage.setItem("productsUnit", JSON.stringify(currentProduct));
  } 

//Intégration des datas dans la page HTML

  let container = document.getElementById('container');
  let allcolumns =  `
    <div class="card text-center">
      <h2 class="card-title" id="nameProduct">${data.name}</h2>
        <img id="imageProduct" src="${data.imageUrl}"></img>
        <h3 id="description">${data.description}</h3>
        <div class="rowPrice text-center"><h4 id="price">${data.price}€</h4></div>
        <p>Référence: <div class="ref">${data._id}</div></p>
        <h3 id="chooseVarnish">Choississez votre vernis:</br>
          <select name="varnish" id="varnish">
            ${data.varnish.map(varnish =>
              "<option value='"+varnish+"'>"+varnish+"</option>")}
          </select>
        </h3>
    </div>  
    `
container.insertAdjacentHTML("afterbegin", allcolumns)  
})









