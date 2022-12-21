const form = document.querySelector('form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

let timeoutId;
function onInput(e) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    };
    timeoutId = setTimeout(() => {
        getWeather(e.target.value);
    }, 1000)
}

input.addEventListener("input", onInput);


// Fetch weather data
async function getWeather(location) {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
            q: location,
            appid: '96a852a58c3f6426b65771dcefb23054',
            units: 'metric'
        }
    })
    console.log(response)
};