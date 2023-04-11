document.getElementById("data").innerHTML = document.lastModified;
// Long hand method ... building day and month names from built-in date methods.
const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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
  "December",
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
  day = `${day}`;
}
const fulldate = `${dayName}, ${day}  ${monthName} ${year}`;

document.querySelector(".date").textContent = fulldate;
//To check variables inside object oncomment code below on line 42
//console.log(JSON.stringify(fulldate));

// document.getElementById("dateStamp").value = d.toDateString();
// document.getElementById("timeStamp").value = hours + " hours " + mins + " minutes " + seconds + " seconds";

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// //get imgs attributed as data-src
// //doe is from mdn web docs
// const imagesToLoad = document.querySelectorAll("img[data-src]");

// //optional parameters for intersectionalObserver
// const imgOptions = {
// 	threshold: 1,
// 	rootMargin: "0px 0px -10px 0px"
// };

// const loadImages = (image) => {
// 	image.setAttribute('src', image.getAttribute('data-src'));
// 	image.onload = () => {image.removeAttribute('data-src');};
// };
// //check to see that Intersection Observer is supported
// if ("IntersectionObserver" in window) {
// 	const observer = new IntersectionObserver((items, observer) => {
// 		items.forEach((item) => {
// 			if (item.isIntersecting) {
// 				loadImages(item.target);
// 				observer.unobserve(item.target);
// 			}
// 		});
// 	});
// 	imagesToLoad.forEach((img) => {
// 		observer.observe(img);
// 	});
// } else {
// 	imagesToLoad.forEach((img) => {
// 		loadImages(img);
// 	});
// }

// //initialize display elements
// // const todayDisplay = document.querySelector("#today");
// const visitsDisplay = document.querySelector("#visits");
// // const daysLeftOutput = document.querySelector("#daysleft");

// //get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));
// //Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps
// //on the if block condition.

// //determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = 'This is your first visit!';

// }
// //incremet the number of visits.
// numVisits++;

// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);

// show todays date demonstration
// todayDisplay.textContent = Date.now();
//8560000 = # miliseconds in a day

// days til Christmas
// let today = new Date();
// let christmas = new Date(today.getFullYear(), 11, 25);
// // check if the waing? days of December, if so. . . change to next year.

// if (today.getMonth() == 11 && today.getDate() > 25){
// christmas.setFullYear(christmas.getFullYear());
// }
