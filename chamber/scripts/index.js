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

var dayOfWeek = new Date().getDay();

function meetGreet() {
    if (dayOfWeek == 1) {
        let output = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        document.querySelector('#meetAndGreet').innerHTML = output;
    } else if (dayOfWeek == 2) {
        let output = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        document.querySelector('#meetAndGreet').innerHTML = output;
    }
}

function doInputOutput() {

            //Get input values from user.
            let t = parseFloat(document.getElementById('temperature').value);
            let s = parseFloat(document.getElementById('windSpeed').value);

            //Call the function that calculates wind chill using the user's input values.
            windChill(t, s);
            x = windChill(t, s);

            //Display wind chill to user.
            document.getElementById('output').innerHTML = `The wind chill is currently ${x}`;
        }

        function windChill(t, s) {
            let windChill = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
            return windChill;
        }

window.onload = function () {
    meetGreet();
};