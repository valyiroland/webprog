document.addEventListener('DOMContentLoaded', () => {
    fetch("https://nodejs.sulla.hu/data")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const adatDiv = document.getElementById("adat");
        data.forEach(adat => {
          const colDiv = document.createElement('div');
          colDiv.classList.add('col-md-3', 'd-flex', 'align-items-stretch');
  
          colDiv.innerHTML = `
            <div class="card mb-1" style="width: 18rem;">
            
              <div class="card-body">
                <h5 class="card-title" style="color: blue; font-size: 30px;">Szolgáltató: ${adat.hostname}</h5>
                <p class="card-text" style="color: color-mix(in srgb, cyan 50%, aquamarine 50%); font-size: 16px;">Szállás neve: ${adat.name}.</p>
                <p class="card-text" style="color: color-mix(in srgb, cyan 50%, aquamarine 50%); font-size: 16px;">Elhelyezkedése: ${adat.location}.</p>
                <p class="card-text" style="color: color-mix(in srgb, cyan 50%, aquamarine 50%); font-size: 16px;">Ára: ${adat.price}.</p>
                <p class="card-text" style="color: color-mix(in srgb, cyan 50%, aquamarine 50%); font-size: 16px;">Legalább: ${adat.minimum_nights}.</p>
              </div>
            </div>
          `;
          const card = colDiv.querySelector('.card');
          card.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
          card.style.backgroundColor = 'burlywood'; // Háttérszín beállítása átlátszóra
          
        
          adatDiv.appendChild(colDiv);
        });
      })
      .catch(error => {
        console.error('Fetch hiba:', error);
        document.getElementById("adat").innerHTML = '<p>Hiba történt az adatok lekérésekor.</p>';
      });
  });
  