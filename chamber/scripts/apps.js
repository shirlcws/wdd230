document.getElementById("demo").innerHTML = document.lastModified;
// Long hand method ... building day and month names from built-in date methods.
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
let day = d.getDate();
if (day < 10) {
	day = `0${day}`
}
const fulldate = `${dayName}, ${day}  ${monthName} ${year}`;

document.querySelector(".date").textContent = fulldate;

// for european/family history format with day FileSystemDirectoryEntry.
// const datefieldUK =document.querySelector('div');
// const datefield = document.querySelector(".date");

// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"


// }).format(now);
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
//     dateStyle: "full"
// }).format(now);

// datefield.innerHTML = `${fulldate}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
