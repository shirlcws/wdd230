   document.getElementById("demo").innerHTML = document.lastModified;
   const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
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
	"December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
// let hours = d.getHours();
// let mins = d.getMinutes();
// let seconds = d.getSeconds();
let day = d.getDate();
if (day < 10) {
	day = `${day}`
}
const fulldate = `${dayName}, ${day}  ${monthName} ${year}`;

 //document.querySelector(".date").textContent = fulldate;

 function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

