fetch('http://localhost:3000/api/furniture')
.then(response => {return response.json()})
.then(data => {
  console.log(data);
  let container = document.getElementById('container');
 
  let allcolumns = data.map(aData => {
     
    return`
        
          <div class="col-12 col-md-6 mt-4 mt-md-0 p-md-5">
            <div class="card text-center">
              <div class="card-body">
                <h2 class="card-title">${aData.name}</h2>
                  <img src="${aData.imageUrl}"></img>
                  <h3>${aData.description}</h3>
                  <div class="rowPrice text-center">
                    <h4>${aData.price}€</h4>
                  </div>
                  <p>Référence: <div class="ref">${aData._id}</div></p>
                  <a href="meuble.html?id=${aData._id}"><button class="clickProduct">Cliquer Ici</button></a>
              </div>
            </div>
          </div>
    `
    
  }).join("")
  container.insertAdjacentHTML("afterbegin",allcolumns)
});







  



  



