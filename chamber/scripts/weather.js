// output elements
const temperature = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon'); 
const caption = document.querySelector('figcaption');


//weather data from API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&appid=f1d22928915a74a895dcffbf88783d2f';

async function apiFetch(){
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    }   catch (error) {
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
    wind.textContent = data.wind.speed.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    caption.textContent = `Icon of current weather condition in Rexburg which is ${desc}`;
    weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weathericon.alt = `Icon of current weather condition in Rexburg which is ${desc}`;
}