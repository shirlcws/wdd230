function doInputOutput() {
    let temp = parseFloat(document.getElementById("temp1").value);
    let wSpeed = parseFloat(document.getElementById("wspeed1").value);

    let windC = windChill(temp, wSpeed);
    document.getElementById("output").innerHTML = windC;
  }

  function windChill(tempF, speed) {
    let f = Math.round(
      35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16)
    );
    return f;
  }