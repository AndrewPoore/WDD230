function orderConfirmation() {
const name = document.querySelector('#firstName').value;
const email = document.querySelector('#email').value;
const phone = document.querySelector('#phoneNumber').value;
const instructions = document.querySelector('#instructions').value;
const fruitOptionOne = document.querySelector('#fruitOptionOne').value;
const fruitOptionTwo = document.querySelector('#fruitOptionTwo').value;
const fruitOptionThree = document.querySelector('#fruitOptionThree').value;

//current date

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

const d = new Date();
const dayName = days[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const date = d.getDate();

//output
let confirmation = `Thank you, ${name}, for ordering your fresh smoothie with ${fruitOptionOne}, ${fruitOptionTwo}, and ${fruitOptionThree} on ${dayName}, ${monthName} ${date}, ${year}. We will make sure to ${instructions}. Look for an order confirmation sent to your email, ${email}, and text updates sent to ${phone}.`;

document.querySelector('#confirmation').innerHTML = confirmation;
}