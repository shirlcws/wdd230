const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };


// day names array
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
// day names array
const shortdayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
];
//  long month names array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const shortmonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

    // The works for long days and long months
// const todaysdate = new Date();
// const dayName = dayNames[todaysdate.getDay()];
// const monthName = months[todaysdate.getMonth()];
// const year = todaysdate.getFullYear;
// const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

const todaysdate = new Date();
const dayName = shortdayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();


document.getElementById("currentdate").textContent = currentdate;

  document.getElementById("currentdate").textContent =
    new Date().toLocaleDateString("en-US", options);


    //  const option = {
    //   weekday: "long",
    //   day: "numeric",
    //   month: "long",
    //   year: "numeric",
    // };
    // document.getElementByID("todaysdate").textContent =
    //   new Date().toLocaleDateString("en-US", options);

    const sect = //This is where we're going to store a link to existing section element.
    document.querySelector('section'); //query is a search for the section element.
    const para = document.createElement('p'); //We're creating a paragraph element, but it's not linked with html document yet.
    para.textContent = 'We hope you enjoyed the ride.'; //we're adding text to the paragraph that's floating by itself (not stored anywhere yet)
    sect.appendChild(para);// like a postit note being stuck into empty space in document.

    const text = document.createTextNode(' - the premier source for web development knowledge.');
    const linkPara = document.querySelector('p');//p already exist, now we are just adding text to it. 
    linkPara.appendChild(text);// Now we're taking the two things we created,(p from above) and merging Linkpara with it together. 

    // sect.appendChild(linkPara);//now we're adding the paragraph to the section. 
    // linkPara.remove();
 
    const link = document.querySelector('a');
    link.textContent = 'Mozilla Developer Network';
    link.href = 'https://developer.mozilla.org';
