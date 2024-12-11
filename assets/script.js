document.getElementById("valider").addEventListener("click", function () {
    let titre = document.getElementById("titre").value
    let description = document.getElementById("description").value

    console.log(titre);
    
    if (titre != "" && description != ""){
        console.log(titre);
        
        document.getElementById("post-it").innerHTML += `<div>
  <p>${titre}</p>
  <p>${description}</p>
</div>`
    }})