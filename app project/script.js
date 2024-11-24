// Replace with your OpenWeatherMap API key
const API_KEY = " c4255d2";

document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={c4255d2}
`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const location = `${data.name}, ${data.sys.country}`;
      const temperature = `${data.main.temp}°C`;
      const weather = data.weather[0].description;

      document.getElementById("weatherInfo").innerHTML = `
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Temperature:</strong> ${temperature}</p>
        <p><strong>Weather:</strong> ${weather}</p>
      `;
    })
    .catch((error) => {
      document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
    });
});
