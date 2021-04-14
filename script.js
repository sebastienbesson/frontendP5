fetch('http://localhost:3000/api/furniture')
.then(response => {return response.json()})
.then(data => {
  console.log(data);
  let container = document.getElementById('container');
  data.map(aData => {
    var div=document.createElement("div")
    
    div.innerHTML=`
      <div>
        <h2>${aData.name}</h2>
        <img src="${aData.imageUrl}"></img>
        <p>${aData.description}</p>
        <div class="rowPrice">
        <h2>${aData.price}</h2>€</div>
        <p>${aData._id}</p>
        <button class="clickProduct">Cliquer</button>
      </div>
    `
    container.appendChild(div)
  })
});







  



  



