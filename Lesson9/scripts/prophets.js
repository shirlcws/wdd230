const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function fetchAndRenderProphets() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

fetchAndRenderProphets();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); //selects output container element

  prophets.forEach((prophet) => {
    //Create elements to add to div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let birthdate = document.createElement("p");
    let death = document.createElement("p");
    let portrait = document.createElement("img");

    //Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // ????Build the p content out to show the prophet's birth and death????
    // p.textContent = '${prophet.birthdate} ${prophet.death}';

    //Build the image protrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} ${prophet.birthdate} ${prophet.death} ${prophet.length} ${prophet.order} ${prophet.birthplace}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); //end of forEach loop
}; // end of function expression
