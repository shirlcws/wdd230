//connects to json file
const Url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
//
//asynchronously uses async function to fetch data from JSON file
async function fetchAndRenderFruit() {
  let response = await fetch(Url);
  let data = await response.json();

  // console.table(data.fruit);
  displayFruits(data.fruits);
}
fetchAndRenderFruits();

const displayFruits = (fruits) => {
  const cards = document.querySelector("div.cards"); //selects an output container element

  fruits.forEach((fruit) => {
    //Create elements to add to div.cards element
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let id = document.createElement("p");
    let nutritions = document.createElement("p");

    // Build h2 content to show 7 fields, fruit name, id, nutrition.
    h2.textContent = `${fruit.name} ${fruit.id} ${fruit.nutritions}`;
    fruit.nutritions = document.createElement(
      "carbohydrates, protein, fat, calories, sugar"
    );
    p.nutitions = document.createElement("protein");
    p.nutritions = document.createElement(fat);
    p.nutritions = document.createElement(calories);
    p.nutritions = document.createElement(sugar);
    // Append the section(card) with the created elements
    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(nutrition);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression
