//Récupération des datas du serveur avec fetch

fetch('http://localhost:3000/api/furniture')
.then(response => {return response.json()})
.then(data => {
  console.log(data);

//Intégration dans la page HTML

  let container = document.getElementById('container');
  let allcolumns = data.map(aData => {   
    return`  
      <div class="col-12 col-lg-6 mt-4 mt-md-0 p-md-5">
        <div class="card text-center">
          <div class="card-body">
            <h2 class="card-title">${aData.name}</h2>
              <img src="${aData.imageUrl}"></img>
              <p>${aData.description}</p>
              <div class="rowPrice text-center"><span>${aData.price}€</span></div>
              <p>Référence: <div class="ref">${aData._id}</div></p>
              <a href="meuble.html?id=${aData._id}"><button class="clickProduct">CHOISIR</button></a>
          </div>
        </div>
      </div>
    `  
  }).join("")
  container.insertAdjacentHTML("afterbegin",allcolumns)
});







  



  



