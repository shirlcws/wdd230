const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function fetchAndRenderMenu() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.fruits);
    displayFruits(data.fruits);
}
fetchAndRenderFruits();

const displayFruits = (fruits) => {
    const cards = document.querySelector("div.fruits");
}