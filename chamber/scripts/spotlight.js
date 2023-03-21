async function fetchAndRenderDirectory() {
  const dataResponse = await fetch("data.json");
  const businessData = await dataResponse.json();

  const directory = businessData.directory.filter((item) => {
    return item.level == "gold";
  });
  const silver = businessData.directory.filter((item) => {
    return item.level == "silver";
  });
//   console.log(gold[0]);

  const silver = businessData.directory.filter((item) => {
    return item.level == "silver" || item.level =="gold";
  });

//   console.log(silver[0])

  // now render them with createElement and stuff
}
fetchAndRenderDirectory();

const renderDirectory = (directory) => {
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
// const item = {
//   level: "gold",
// };

// console.log("burrito" == "foo");
