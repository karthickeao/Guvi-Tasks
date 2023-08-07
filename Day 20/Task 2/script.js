const apiUrl = 'https://api.imgflip.com/get_memes';

// Function to fetch data from the API and display memes on the webpage
function displayMemes() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the list of memes from the API response
      const memes = data.data.memes;

      // Create HTML content for displaying the memes
      let memesHTML = '';
      memes.forEach(meme => {
        memesHTML += `
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src="${meme.url}" class="card-img-top" alt="${meme.name}">
              <div class="card-body">
                <h5 class="card-title">${meme.name}</h5>
              </div>
            </div>
          </div>
        `;
      });

      // Display the memes on the webpage
      document.getElementById('memesContainer').innerHTML = memesHTML;
    })
    .catch(error => {
      // Handle errors and display a message
      document.getElementById('memesContainer').innerHTML = '<p>An error occurred while fetching data from the API.</p>';
      console.error('Error:', error);
    });
}

// Call the function to display memes on page load
displayMemes();