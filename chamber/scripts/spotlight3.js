async function fetchAndRenderDirectory() {
  const dataResponse = await fetch("data.json");
  const businessData = await dataResponse.json();


//disable renderDirectory and Use the console.table(businessData.directory); code to check connection to page
//    console.table(businessData.directory);
//sort silver and gold levels from directory
  const silver = businessData.directory.filter((item) => {
    return item.level == "silver" || item.level == "gold";
   
  });
//render the silver and gold levels 
 // console.log(silver);
  renderDirectory(silver);

}
//call awaiting function
fetchAndRenderDirectory();
//after above function runs again - directory is rendered
const renderDirectory = (directory) => {
  const cards = document.querySelector("div.cards"); //selects output container element

  directory.forEach((directory) => {
    //Create elements to add to div.cards element

    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let logos = document.createElement("img");

    h3.textContent = `${directory.business}`;
    address.textContent = `${directory.address}`;
    phone.textContent = `${directory.phone}`;
    website.textContent = `${directory.website}`;
    website.href = `${directory.website}`;

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
