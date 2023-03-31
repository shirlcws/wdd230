//summarize current weather-temp-humidity-3 day forcast for Carlsbad CA
const currentTemp = document.querySelector("#current-temp");
const humid = document.querySelector("#humid");
// const forcast = document.querySelector("#forcast-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcap");
//fetch apiurl response from openweathermap.org

async function apiFetch() {
    const apiURL = `//const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=32.4207&lon=-104.2288&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae`;;

//test in console

try {
    const response = await fetch(apiURL);
    if (response.ok) {
        const data = await response.json();

        console.log(data);//for testing call
        displayResults(data);

    } else {
        throw Error(await response.text());
    }

}// } catch (error) {
// console.log(error);
// }
// }
// apiFetch();

// function displayResults(weatherData) {
//     currentTemp.innerHTML =`<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    
// }