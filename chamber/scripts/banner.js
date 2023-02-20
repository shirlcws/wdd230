
let Newday = new Date();
// document.querySelector('div p')#info-banner = (dayName == 1 || dayName == 2) ? "block" : "none";
             
if(Newday.getDay() == 1 || Newday.getDay() == 2) {
    document.getElementById("info-banner").style.display="block";

 } 

