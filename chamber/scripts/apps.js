document.getElementById("demo").innerHTML = document.lastModified;
// for european/family history format with day FileSystemDirectoryEntry.
const datefieldUK =document.querySelector('div');

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"


}).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
