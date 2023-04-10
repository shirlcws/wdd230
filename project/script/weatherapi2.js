// select HTML elements in the document
const humid = document.querySelector("#humid");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcap");
const forecastTemp = document.querySelector("#forecast-temp");
// The apiurl fetches response from openweathermap.org through a query of your choice
async function apiFetch() {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=32.4207&lon=-104.2288&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae`;

  // The below testing script is how this differs from the prophet exercise

  // try {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();

    console.log(data); // this is for testing the call
    displayResults(data);
  } else {
    throw Error(await response.text());
  }
  // } catch (error) {
  //   console.log(error);
  // }
}
// The above testing script is how this differs from the prophet exercise
apiFetch();

function displayResults(weatherData) {
  humid.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const wDesc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", wDesc);
  captionDesc.textContent = wDesc;
}
