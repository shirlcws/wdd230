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
// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];
const months = [
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
    "Dec"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
let date = d.getDate();
if (date < 10) {
   date = `0${date}`
}

const fulldate = `${month} ${day}, ${year}`;
document.querySelector("#currentdate").textContent = fulldate;
// const date = d.getDate();
// const dateString = date < 10 ? `0${date}` : `${date}`
// const fulldate = `${dayName}`, ${dateString} ${monthName} ${year};
// document.querySelector("#date2").textContent = fulldate;