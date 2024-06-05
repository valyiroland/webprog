document.getElementById("gomb").onclick = function() {
    let szallas = JSON.stringify({
    
      name:document.getElementById("name").value ,
      hostname:document.getElementById("hostname").value ,
      location:document.getElementById("location").value ,
      price:document.getElementById("price").value ,
      minimum_nights:document.getElementById("minimum_nights").value ,

    }
    )
    
    
      fetch('https://nodejs.sulla.hu/data',{
        method:"POST",
        body: szallas,
        headers:{'Content-Type': 'application/json'}
       })
      .then(function(valasz){
        return valasz.json();
      })
       
      alert('Az új szállás sikeresen létrehozva!');
    }
  