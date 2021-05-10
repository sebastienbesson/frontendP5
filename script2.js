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
    <h2 class="card-title">${data.name}</h2>
    <img src="${data.imageUrl}"></img>
    <h3>${data.description}</h3>
    <div class="rowPrice text-center">
    <h4>${data.price}€</h4>h
    </div>
    <p>Référence: <div class="ref">${data._id}</div></p>
    <p><select name="varnish">
    ${data.varnish.map(varnish =>
      "<option value='"+varnish+"'>"+varnish+"</option>")}
    </select></p>
    
    <button class="clickValid">Je valide mon choix</button>
    </div>      
    `

container.insertAdjacentHTML("afterbegin", allcolumns)  

})



