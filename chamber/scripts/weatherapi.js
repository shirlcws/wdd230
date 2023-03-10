// function doInputOutput() {
//     let temp = parseFloat(document.getElementById("temp1").value);
//     let wSpeed = parseFloat(document.getElementById("wspeed1").value);

//     let windC = windChill(temp, wSpeed);
//     document.getElementById("output").innerHTML = windC;
//   }

//   function windChill(tempF, speed) {
//     let f = Math.round(
//       35.74 +
//         0.6215 * tempF -
//         35.75 * Math.pow(speed, 0.16) +
//         0.4275 * tempF * Math.pow(speed, 0.16)
//     );
//     return f;
//   }
  // select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");
const captionDesc = document.querySelector("#figcaption");

async function apiFetch() {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Blackfoot&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae`;
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
  // windSpeed.innerHTML = `<strong>${weatherData.wind.speed()}</strong>`;
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
// {/* <h1>Weather</h1>
// <p>
//   The current temperature in Blackfoot is
//   <span id="current-temp"></span> &deg;F
// </p>
// <h2>Current Condition</h2>
// <figure>
//   <img src="" alt="image depicting weather status" id="weather-icon" />
//   <figcaption id="figcaption"></figcaption>
// </figure> */}