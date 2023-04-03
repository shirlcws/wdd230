//method from mdn web docs-imgs attributed as data-src
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters / intersectional Observer
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"};

    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {image.removeAttribute('data-src');};
    };
    //checks for IntersectionObserver support
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

