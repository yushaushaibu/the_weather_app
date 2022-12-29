const form = document.querySelector('form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const cityName = document.querySelector('#city');
const country = document.querySelector('#country');
const temp = document.querySelector('#temp');
const icon = document.querySelector('#icon');
const description = document.querySelector('#description');

// prevents a function from being called after each keypress
const debounce = (fn, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay)
    }
}

// calls getWeather function with a city name as argument 
const onInput = async (e) => {
    const weatherData = await getWeather(e.target.value);
    city.innerHTML = `${weatherData.name}`;
    country.innerHTML = `${weatherData.sys.country}`;
    temp.innerHTML = `${Math.round(parseFloat(weatherData.main.temp))}`;
    icon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    description.innerHTML = `${weatherData.weather[0].description}`.toUpperCase();
};

input.addEventListener("input", debounce(onInput, 700));

// Fetch weather data
const getWeather = async (location) => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
            q: location,
            appid: '96a852a58c3f6426b65771dcefb23054',
            units: 'metric'
        }
    });
    return response.data;
};