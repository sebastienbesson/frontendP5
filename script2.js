let params = new URLSearchParams(document.location.search.substring(1)); /* recuperer l'id de l'url */
let id = params.get("id");
console.log(id);


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
  let currentProduct = localStorage.getItem("productsUnit");
  if(!currentProduct){
    currentProduct= [];

  }else{currentProduct= JSON.parse(currentProduct)};
  currentProduct.push(productUnit);
  localStorage.setItem("productsUnit", JSON.stringify(currentProduct));
  

  }
  


  let container = document.getElementById('container');
  let allcolumns =  `
    <div class="product">
    <h2 class="card-title" id="nameProduct">${data.name}</h2>
    <img id="imageProduct" src="${data.imageUrl}"></img>
    <h3 id="description">${data.description}</h3>
    <div class="rowPrice text-center">
    <h4 id="price">${data.price}€</h4>
    </div>
    <p>Référence: <div class="ref">${data._id}</div></p>
    <h3>Choississez votre vernis:</br><select name="varnish" id="varnish">
    ${data.varnish.map(varnish =>
      "<option value='"+varnish+"'>"+varnish+"</option>")}
    </select></h3>
    </div>
   
    `

container.insertAdjacentHTML("afterbegin", allcolumns)  

})









