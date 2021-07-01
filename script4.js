//Réception des données de l'envoi page 3 avec localstorage

const commandId = localStorage.getItem("commandId");
const totalCommand = localStorage.getItem("totalCommand");

//Intégration dans la page HTML des données

const showFinalCommand = `
<h2>Ma Commande:</h2>
<p>Le numéro de commande est:</p>
<h4>${commandId}</h4>
<p>Le montant total est:</p>
<h4>${totalCommand} €</h4>
`
container.insertAdjacentHTML("afterbegin", showFinalCommand);





  


  





      
    
