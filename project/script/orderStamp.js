// Get current date and time
const objDate = new Date();

//To check variables inside object uncomment code below on line 5
//console.log(JSON.stringify(objDate));

// Assign date time string to hidden field value attribute (shows up in inpector as value)
document.getElementById("timeStamp").value = objDate.toISOString();

//let thankYou = document.querySelector("submit");
let order = document.querySelector("Submit");


// add one count for every number of submits to local storage
const drinks = document.querySelector('.drinks');

// place each count in a variable named lastResult 
const lastResult =
document.querySelector('.lastResult');
const drinkSubmit =
document.querySelector('.drinkSubmit');




let drinksCount = 1;


{/* <div class="totalOrders">
    <p class="orders"></p>
<p class="drinkCount"></p> //this is the running total
</div>

<input type="submit" value="Submit order"
class="drinkSubmit"/>
</div>

<input type="submit" value"Submitnum"
class="numSubmit"/>



drinkOrder.textContent = ‘ ‘;


// the next two constants are made to store a reference to results paragraphs in the HTML, and used to insert values later

<div class="totalOrders">
    <p class="orders"></p>
<p class="drinkCount"></p> //this is the running total
</div>

//the next constants store references to the form text. Input and submit button

<input type="submit" value="Submit order"
class="drinkSubmit"/>
</div>

<input type="submit" value"Submit num"
class=numSubmit"/>


// make a function to add number time submit is clicked.
Function checkOrder() {
Const submit = Number	(submit.value);
If (numOrders 


Function drinkOrders(orders, drinkCount) {
// Calculate the total price 
Const total = orders + drinkCount;


// Create and append a new paragraph to the document

const para = document.createElement(“p”);
para.textContent = `Total drinks ordered ${total}`;
document.body.appendChild(para);
} */}