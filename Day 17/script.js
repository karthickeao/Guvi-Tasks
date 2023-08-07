const countriesApiUrl = "https://restcountries.com/v3.1/all";
    const openWeatherMapApiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "1dda88a77d69f7e80b309ee9b433fcdc"; 

    
    async function fetchCountriesData() {
      try {
        const response = await fetch(countriesApiUrl);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching country data:", error);
        return [];
      }
    }

    
    function displayCountryCards(countries) {
      const countryDetailsContainer = document.getElementById("countryDetailsContainer");

      
      const countriesToShow = countries.filter(country =>
        country.name.common === "India" ||
        country.name.common === "Panama" ||
        country.name.common === "Peru"
      );

      countriesToShow.forEach((country) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");

        card.innerHTML = `
          <div class="card h-100"">
          <div class="card-header">${country.name.common}</div><br><br>
            <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common} Flag">
            <div class="card-body">              
              <p class="card-text">
                Country: ${country.capital}<br>
                Region: ${country.region}<br>
                Country Code: ${country.cca2}
              </p>
             <center> <button type="button" class="btn btn-primary" onclick="fetchWeatherData('${country.capital}')">Click for Weather</button></center>
            </div>
          </div>
        `;

        countryDetailsContainer.appendChild(card);
      });
    }

   
    async function fetchWeatherData(city) {
      const weatherDetailsContainer = document.getElementById("weatherDetailsContainer");
      weatherDetailsContainer.innerHTML = "<p>Loading...</p>";

      try {
        const response = await fetch(`${openWeatherMapApiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherDetailsContainer.innerHTML = "<p>Error fetching weather data.</p>";
      }
    }

    
    function displayWeatherData(weatherData) {
      const weatherDetailsContainer = document.getElementById("weatherDetailsContainer");
      weatherDetailsContainer.innerHTML = `
        <p>Weather Description: ${weatherData.weather[0].description}</p>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Humidity: ${weatherData.main.humidity} %</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
      `;
    }


    window.onload = async () => {
      const countriesData = await fetchCountriesData();
      displayCountryCards(countriesData);
    };