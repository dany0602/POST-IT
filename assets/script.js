document.getElementById("valider").addEventListener("click", function () {
    let titre = document.getElementById("titre").value
    let description = document.getElementById("description").value

    console.log(titre);
    
    if (titre != "" && description != ""){
        console.log(titre);
        
        document.getElementById("post-it").innerHTML += `<div class="card bg-warning m-2 shadow col-lg-4 col-8 h-25">
        <div class="card-body ">
          <div class="row justify-content-between">
            <h5 class="card-title col-8">${titre}</h5>
            <button type="button" class="btn-close mx-2 col-3" aria-label="Close"></button>
          </div>
          <p class="card-text">${description}</p>
        </div>
      </div>`
    }})
    document.getElementById("annuler").addEventListener("click", function(){
document.getElementById("post-it").innerHTML = ""
 })