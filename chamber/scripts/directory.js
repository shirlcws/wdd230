const path = "data.json";
async function fetchAndRenderDirectory() {
  const grab = await fetch(path);
  const info = await grab.json();
  //take line below out and add console.table line back in to check it in console
  grabDirectory(info.directory);
  //Use the console.table line to check connection to page
  //   console.table(info.directory);
}
fetchAndRenderDirectory();

const grabDirectory = (directory) => {
  const cards = document.querySelector("div.cards"); //selects output container element

  directory.forEach((directory) => {
    //Create elements to add to div.cards element

    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    let logos = document.createElement("img");

    h3.textContent = `${directory.business}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;

    //Build the image logo by setting all the relevant attribute
    logos.setAttribute("src", directory.imageurl);
    logos.setAttribute("alt", `business logo for ${directory.business}`);
    logos.setAttribute("loading", "lazy");
    logos.setAttribute("width", "150");

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(logos);
    card.appendChild(address);
    card.appendChild(website);

    cards.appendChild(card);
  }); //end of forEach loop
}; //  end of function expression
