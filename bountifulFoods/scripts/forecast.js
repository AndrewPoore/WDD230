// Forecast Data ******************************************
const forecast = document.querySelector('#forecast');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=f1d22928915a74a895dcffbf88783d2f';

async function forecastFetch() {
    try {
        const responseForecast = await fetch(forecastURL);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            console.log(dataForecast);
            forecastResults(dataForecast);
        } else {
            console.log(`Response not OK ${await responseForecast.text()}`);
        }
    } catch (errorForecast) {
        console.log(`Error: ${errorForecast.message}`);
    }
}

forecastFetch()

// capitalize
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// display results
function forecastResults(dataForecast) {
    forecast.textContent = `${dataForecast.list[4].main.temp.toFixed(2)} °F, ${dataForecast.list[12].main.temp.toFixed(2)} °F, ${dataForecast.list[20].main.temp.toFixed(2)} °F`;
}