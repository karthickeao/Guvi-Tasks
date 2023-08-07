const apiUrl = 'https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port';

// Function to fetch data from the API and display address information on the webpage
function displayAddressInfo() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the address information from the API response
      const address = data.features[0].properties;

      // Create HTML content for displaying the address information
      const addressInfoHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Address: ${address.label}</h5>
            <p class="card-text"><strong>City: ${address.city}</strong></p>
            <p class="card-text"><strong>Postcode: ${address.postcode}</strong></p>
          </div>
        </div>
      `;

      // Display the address information on the webpage
      document.getElementById('addressInfo').innerHTML = addressInfoHTML;
    })
    .catch(error => {
      // Handle errors and display a message
      document.getElementById('addressInfo').innerHTML = '<p>An error occurred while fetching data from the API.</p>';
      console.error('Error:', error);
    });
}

// Call the function to display address information on page load
displayAddressInfo();