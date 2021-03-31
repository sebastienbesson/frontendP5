fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then( data => console.log(data) )
  .catch( error => console.error('error:', error) );

const container1 = document.querySelector('#container1');
const nameProduct1 = document.querySelector('#nameProduct1');
const img = document.createElement('img');
container1.appendChild(img);
const descriptionProduct1 = document.querySelector('#descriptionProduct1');
container1.appendChild(descriptionProduct1);
const priceProduct1 = document.querySelector('#priceProduct1');
container1.appendChild(priceProduct1);
const idProduct1 = document.querySelector('#idProduct1');
container1.appendChild(idProduct1);
const variantProduct1 = document.querySelector('#variantProduct1');
container1.appendChild(variantProduct1);

fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then(data => {
    nameProduct1.innerHTML = data[0].name;
    img.src = data[0].imageUrl;
    descriptionProduct1.innerHTML = data[0].description;
    priceProduct1.innerHTML = data[0].price;
    idProduct1.innerHTML = data[0]._id;
    variantProduct1.innerHTML = data[0].varnish;
});

  
const container2 = document.querySelector('#container2');
const nameProduct2 = document.querySelector('#nameProduct2');
const img2 = document.createElement('img');
container2.appendChild(img2);
const descriptionProduct2 = document.querySelector('#descriptionProduct2');
container2.appendChild(descriptionProduct2);
const priceProduct2 = document.querySelector('#priceProduct2');
container2.appendChild(priceProduct2);
const idProduct2 = document.querySelector('#idProduct2');
container2.appendChild(idProduct2);
const variantProduct2 = document.querySelector('#variantProduct2');
container2.appendChild(variantProduct2);
  
fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then(data => {
    nameProduct2.innerHTML = data[1].name;
    img2.src = data[1].imageUrl;
    descriptionProduct2.innerHTML = data[1].description;
    priceProduct2.innerHTML = data[1].price;
    idProduct2.innerHTML = data[1]._id;
    variantProduct2.innerHTML = data[1].varnish;
});

const container3 = document.querySelector('#container3');
const nameProduct3 = document.querySelector('#nameProduct3');
const img3 = document.createElement('img');
container3.appendChild(img3);
const descriptionProduct3 = document.querySelector('#descriptionProduct3');
container3.appendChild(descriptionProduct3);
const priceProduct3 = document.querySelector('#priceProduct3');
container3.appendChild(priceProduct3);
const idProduct3 = document.querySelector('#idProduct3');
container3.appendChild(idProduct3);
const variantProduct3 = document.querySelector('#variantProduct3');
container3.appendChild(variantProduct3);
  
fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then(data => {
    nameProduct3.innerHTML = data[2].name;
    img3.src = data[2].imageUrl;
    descriptionProduct3.innerHTML = data[2].description;
    priceProduct3.innerHTML = data[2].price;
    idProduct3.innerHTML = data[2]._id;
    variantProduct3.innerHTML = data[2].varnish;
});

const container4 = document.querySelector('#container4');
const nameProduct4 = document.querySelector('#nameProduct4');
const img4 = document.createElement('img');
container4.appendChild(img4);
const descriptionProduct4 = document.querySelector('#descriptionProduct4');
container4.appendChild(descriptionProduct4);
const priceProduct4 = document.querySelector('#priceProduct4');
container4.appendChild(priceProduct4);
const idProduct4 = document.querySelector('#idProduct4');
container4.appendChild(idProduct4);
const variantProduct4 = document.querySelector('#variantProduct4');
container4.appendChild(variantProduct4);
  
fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then(data => {
    nameProduct4.innerHTML = data[3].name;
    img4.src = data[3].imageUrl;
    descriptionProduct4.innerHTML = data[3].description;
    priceProduct4.innerHTML = data[3].price;
    idProduct4.innerHTML = data[3]._id;
    variantProduct4.innerHTML = data[3].varnish;
});

const container5 = document.querySelector('#container5');
const nameProduct5 = document.querySelector('#nameProduct5');
const img5 = document.createElement('img');
container5.appendChild(img5);
const descriptionProduct5 = document.querySelector('#descriptionProduct5');
container5.appendChild(descriptionProduct5);
const priceProduct5 = document.querySelector('#priceProduct5');
container5.appendChild(priceProduct5);
const idProduct5 = document.querySelector('#idProduct5');
container5.appendChild(idProduct5);
const variantProduct5 = document.querySelector('#variantProduct5');
container5.appendChild(variantProduct5);
  
fetch('http://localhost:3000/api/furniture')
  .then( response => response.json() )
  .then(data => {
    nameProduct5.innerHTML = data[4].name;
    img5.src = data[4].imageUrl;
    descriptionProduct5.innerHTML = data[4].description;
    priceProduct5.innerHTML = data[4].price;
    idProduct5.innerHTML = data[4]._id;
    variantProduct5.innerHTML = data[4].varnish;
});

  


  



  



