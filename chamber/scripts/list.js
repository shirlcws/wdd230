const gallerybtn = document.querySelector("#gallery");
const listbtn = document.querySelector("#list");
const display = document.querySelector(".cards");

gallerybtn.addEventListener("click", () => {
  display.classList.add("gallery");
  display.classList.remove("list");
});

listbtn.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("gallery");
}
