// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const windSpeed = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

async function apiFetch() {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae`;
  // The below testing script is how this differs from the prophet exercise
   
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();

      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
// The above testing script is how this differs from the prophet exercise
apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>` 
   // windSpeed.innerHTML = `<strong>${weatherData.wind.speed()}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;


   
  

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
