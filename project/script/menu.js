const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function fetchAndRenderMenu() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.fruit);
    displayFruits(data.fruit);
}
fetchAndRenderMenu();

const displayFruit = (fruit) => {
    const cards = document.querySelector("div.fruit");
}