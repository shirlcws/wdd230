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

// document.querySelector('div p')#info-banner = (dayName == 1 || dayName == 2) ? "block" : "none";
            
            if(d.getDay() == 1 || d.getDay() == 2) {
				document.getElementById("info-banner").style.display="block";
				
			 } 
             

			//  const #info-banner = dayOfWeek == 1 || dayOfWeek == 6 ?{
			//  document.getElementById("#info-banner")(display:"block");
			// 	{			 
			//   else  (display: "none");
			//   })
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


//get imgs attributed as data-src
//doe is from mdn web docs
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters for intersectionalObserver
const imgOptions = {
	threshold: 1,
	rootMargin: "0px 0px -10px 0px"
};

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {image.removeAttribute('data-src');};
};
//check to see that Intersection Observer is supported
if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
} else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}

//initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

//get the stord value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
//Using the Numbe() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps
//on the if block Condition.

//determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = 'This is your first visit!';

}
numVisits++;


