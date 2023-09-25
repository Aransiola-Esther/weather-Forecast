let btnSearch = document.getElementById("searchBtn");
btnSearch.addEventListener("click", getWeatherInfo);

function getWeatherInfo() {
  let cityInput = document.getElementById("cityInput").value;

  let weatherApilink = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8612ef2eddf9645eba9774552d8c8a82`;

  fetch(weatherApilink)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(tolu => {
      let weatherInfo = document.getElementById("weatherInfo");
      let temperature = parseInt(tolu.main.temp - 273);
      let description = tolu.weather[0].description;
      let humidity = tolu.main.humidity;
      let pressure = tolu.main.pressure;

      let weatherHtml = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Pressure: ${pressure}%</p>
      `;

      weatherInfo.innerHTML = weatherHtml;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}