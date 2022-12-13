// Menu Toggle
function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

// Last Modification Date
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// output elements
const temperature = document.querySelector('#temp');
const description = document.querySelector('#currently');
const humidity = document.querySelector('#humidity');

//weather data from API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=f1d22928915a74a895dcffbf88783d2f';


async function apiFetch() {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

apiFetch()

// capitalize
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// display results
function displayResults(data) {
    temperature.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    humidity.textContent = data.main.humidity;
}