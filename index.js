const form = document.querySelector('form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

input.addEventListener('input', () => {});


// Fetch location data (Direct Geocoding) from ~ OpenWeather API
async function getLocation(location) {
    const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct?', {
        params: {
            q: location,
            appid: '96a852a58c3f6426b65771dcefb23054'
        }
    })
    console.log(response.data[0].name); 
}
getLocation('Paris');