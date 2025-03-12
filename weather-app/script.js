let cityInput = document.querySelector("#cityName");
let weatherBtn = document.querySelector("#getWeatherBtn");

// UI Elements
let cityDisplay = document.querySelector("#cityDisplay");
let weatherIcon = document.querySelector("#weatherIcon");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let windSpeed = document.querySelector("#windSpeed");

// API Key
const apiKey = "3b5b2584d6f96ac140cb7498f861a3e6";

// Event Listener for Button Click
weatherBtn.addEventListener("click", function () {
    let cityName = cityInput.value.trim();
    if (cityName === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(cityName);
});

// Function to Fetch Weather Data
async function getWeather(cityName) {
    try {
        // Fetch latitude & longitude
        let geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
        let geoResponse = await fetch(geoUrl);
        if (!geoResponse.ok) throw new Error(`City not found! (${geoResponse.status})`);
        
        let geoData = await geoResponse.json();
        if (geoData.length === 0) throw new Error("City not found! Please enter a valid city.");

        let { lat, lon, name } = geoData[0];

        // Fetch weather details
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        let weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) throw new Error(`Weather data error (${weatherResponse.status})`);

        let weatherData = await weatherResponse.json();

        // Update UI
        cityDisplay.textContent = `${name}`;
        temperature.textContent = `${weatherData.main.temp}°C`;
        weatherDescription.textContent = weatherData.weather[0].description;
        windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

        // Update Weather Icon
        let iconCode = weatherData.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    } catch (error) {
        console.error("Error fetching data:", error);
        alert(error.message);
    }
}
