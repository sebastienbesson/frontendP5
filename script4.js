const commandId = localStorage.getItem("commandId");
const totalCommand = localStorage.getItem("totalCommand");

const showFinalCommand = `
<p>Votre numéro de commande est le ${commandId}<p>
<p>Le montant total de vos achat est de ${totalCommand}</p>
`
container.insertAdjacentHTML("afterbegin", showFinalCommand);





  


  





      
    
