  // Get current date and time
  const objDate = new Date();

  //To check variables inside object uncomment code below on line 5
//   console.log(JSON.stringify(objDate));
  
  // Assign date time string to hidden field value attribute
document.getElementById('timeStamp').value = objDate.toISOString();

