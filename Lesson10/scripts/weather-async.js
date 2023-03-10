// use cityID and API_ID arguments instead

async function getWeather() {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=76cce6c470ec11e978662301c7f58bae`;

  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    // temporary check/test of data conversion - demonstrate
    console.log(data);

    document.querySelector("#temperature").textContent =
      data.main.temp.toFixed(1);

    // array means there can be more than one weather event.
    let wDesc = data.weather[0].description;
    //manipulate the descriptions to capitalize the first letter of each word
    (wDesc = wDesc.split('')), map(capitalize).join('');
    document.querySelector('#currently').textContent = wDesc;

    document
      .getElementById("weathericon")
      .setAttribute(
        "src",
        `https//openweathermap.org/img/w/${data.weather[0].icon}.png`
      ); //focus on the setAttribute() method

    document.getElementById("weathericon").setAttribute("alt", wDesc);
    document.querySelector("figcation").textContent = `${wDesc}`;
    //additional work would be to build the output given there can be more than one weather event.
    // const w_events = data.weather;
    // console.log(w_events);
    // console.log(w_events);
    //end of response.ok
  }
}
