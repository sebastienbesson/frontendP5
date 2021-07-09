//Réception des données de l'envoi page 3 avec localstorage

const commandId = localStorage.getItem("commandId");
const totalCommand = localStorage.getItem("totalCommand");

//Intégration dans la page HTML des données

const showFinalCommand = `
<h1>Ma Commande:</h1>
<p>Le numéro de commande est:</p>
<span>${commandId}</span>
<p>Le montant total est:</p>
<span>${totalCommand}€</span>
`
container.insertAdjacentHTML("afterbegin", showFinalCommand);





  


  





      
    
