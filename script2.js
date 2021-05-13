let params = new URLSearchParams(document.location.search.substring(1)); /* recuperer l'id de l'url */
let id = params.get("id");
console.log(id);


fetch('http://localhost:3000/api/furniture/'+id)
.then(response => {return response.json()})
.then(data => {
  console.log(data);
  let container = document.getElementById('container');
  let allcolumns =  `
    <div class="product">
    <h2 class="card-title" id="nameProduct">${data.name}</h2>
    <img src="${data.imageUrl}"></img>
    <h3 id="description">${data.description}</h3>
    <div class="rowPrice text-center">
    <h4 id="price">${data.price}€</h4>
    </div>
    <p>Référence: <div class="ref">${data._id}</div></p>
    <p><select name="varnish" id="varnish">
    ${data.varnish.map(varnish =>
      "<option value='"+varnish+"'>"+varnish+"</option>")}
    </select></p>
    </div>
    `

container.insertAdjacentHTML("afterbegin", allcolumns)  

})

const finalProduct = JSON.parse(localStorage.getItem("productUnit"));

clickValid.onclick = ()=> {
  const productUnit = {
    name: "Coffee Table",
    price: "59900",
    ref: "5be9cc611c9d440000c1421e"
  }
localStorage.setItem("productUnit",JSON.stringify(productUnit));
}

cancelChoice.onclick = ()=> {
  localStorage.clear();
}

