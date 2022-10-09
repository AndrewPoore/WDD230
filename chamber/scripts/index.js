let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "Februray",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();

let dayName = days[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();

let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.querySelector('#year').innerHTML = year;

document.querySelector('#currentDate').innerHTML = fullDate;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu() {
document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}