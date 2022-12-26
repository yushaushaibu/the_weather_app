const form = document.querySelector('form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


// prevents a function from being called after each keypress
function debounce(fn, delay = 1000) {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay)
    }
}

// calls getWeather function with a city name as argument 
function onInput(e) {
    getWeather(e.target.value);
}

input.addEventListener("input", debounce(onInput, 700));


// Fetch weather data
async function getWeather(location) {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
            q: location,
            appid: '96a852a58c3f6426b65771dcefb23054',
            units: 'metric'
        }
    })
    // console.log(response);
    console.log(response.data.name)
};

