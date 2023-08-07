const apiUrl = 'https://api.artic.edu/api/v1/artworks/129884';
    
    function displayArtworkInfo() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {          
          const artwork = data.data;          
          const artworkInfoHTML = `
            <div class="card">
              <img src="${artwork.image_id}" class="card-img-top" alt="${artwork.title}">
              <div class="card-body">
                <h5 class="card-title">${artwork.title}</h5>
                <p class="card-text"><strong>Artist:</strong> ${artwork.artist_title}</p>
                <p class="card-text"><strong>Medium:</strong> ${artwork.medium_display}</p>
                <p class="card-text"><strong>Date:</strong> ${artwork.date_display}</p>
              </div>
            </div>
          `;        
          document.getElementById('artworkInfo').innerHTML = artworkInfoHTML;
        })
        .catch(error => {
          
          document.getElementById('artworkInfo').innerHTML = '<p>An error occurred while fetching data from the API.</p>';
          console.error('Error:', error);
        });
    }    
    displayArtworkInfo();