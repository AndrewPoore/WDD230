/*
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
*/

const requestURL = 'https://andrewpoore.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getBusinesses() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.businesses.forEach(business => {
        displayBusinesses(business)
    })
}

function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('h2');
    let phone = document.createElement('h6');
    let url = document.createElement('h6');

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageURL);
    logo.setAttribute('alt', `${business.name} business logo`);
    logo.setAttribute('loading', 'lazy');

    // Change the textContent property of the h2 element to contain the business's full address
    h2.textContent = `${business.address}`;

    // h6 content
    phone.textContent = `${business.phone}`;
    url.textContent = `${prophet.url}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

getBusinesses;