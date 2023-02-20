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