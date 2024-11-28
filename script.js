document.getElementById("location-form").addEventListener("submit", getWeather);

// OpenWeatherMap API Key
const apiKey = "your_api_key";
let cityInput = document.getElementById("location-input");
// getWeather Function

function getWeather(e) {
  //Write you code logic here
  e.preventDefault();

  let city = cityInput.value;
  city = city.toLowerCase();
  console.log(city);
  fetchWeatherData(city);
}

async function fetchWeatherData(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      // Handle invalid city error
      throw new Error("City not found");
    }

    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    displayError(error.message);
  }
  console.log("clear");
  cityInput.value = "";
}

// Display Weather Data
function displayWeather(data) {
  let resultElement = document.getElementById("weather-data");

  resultElement.innerHTML = `
    <span ><h2> ${data.name}</h2></span>
    <span>${data.weather[0].main}</span>
    <span> ${data.main.temp}°C</span>
  `;
}

// Display Error Message
function displayError(message) {
  let errorElement = document.getElementById("error");
  errorElement.innerHTML = `Error: ${message}`;
}
