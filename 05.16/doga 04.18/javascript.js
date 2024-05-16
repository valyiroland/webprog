document.getElementById("gomb").onclick = function() {
    fetch("https://pizza.kando-dev.eu/Pizza")
    .then(function(valasz){
      return valasz.json();
  
  
    })
    .then(function(valasz2){
        for(const adat of valasz2){
          document.getElementById("adat").innerHTML += ` <div class="card" style="width: 18rem;">
          <img class="card-img-top" src=${adat.kepURL} >
          <br>
          <div class="card-body">
            <h5 class="card-title">${adat.name}</h5>
            <p class="card-text">Ez egy :${adat.name}.</p>
            
            
          </div>
        </div>`;
        }
      })
    }

    document.getElementById("gomb2").onclick = function() {
        let player = JSON.stringify({
        
        name:document.getElementById("name").value ,
        isGlutenFree:document.getElementById("isGlutenFree").value ,
        kepURL:document.getElementById("kepURL").value ,

        }
        )
        
        
          fetch('https://pizza.kando-dev.eu/Pizza',{
            method:"POST",
            body: player,
            headers:{'Content-Type': 'application/json'}
           })
          .then(function(valasz){
            return valasz.json();
          })
    
        }