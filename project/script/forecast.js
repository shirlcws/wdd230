// //select an html element in the document
const forecastTemp = document.querySelector("#forecast-temp");

// //use an apiurl to fetch a response from openweathermap.org through MediaQueryList
async function apiFetch() {
 const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=32.4207&lon=-104.2288&appid&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae&cnt=3`;
 }

// //test script in console
 try {
const response = await fetch(apiURL);
 if (response.ok) {
 const data = await response.json();

 console.log(data); // this is for testing the call
displayResults(data);
 } else {
  throw Error(await response.text());
}
display error if response is not ok

display results

apiFetch();
function displayResults(forecastData) {
 forecastTemp.innerHTML = `<strong>${forecastData.main.temp.toFixed(   0
   )}</strong>`;

 const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const wDesc = weatherData.weather[0].description;
   weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", wDesc);
 captionDesc.textContent = wDesc;
 }
