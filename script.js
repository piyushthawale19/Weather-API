async function getWeather() {
    let location = document.getElementById('location').value;
    let apiKey = 'e7bd7933a1ab46e5bdc142910252502'; 
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        document.getElementById('city').innerText = `📍 ${data.location.name}, ${data.location.country}`;
        document.getElementById('temperature').innerText = `🌡️ ${data.current.temp_c}°C`;
        document.getElementById('condition').innerText = `🌥️ ${data.current.condition.text}`;
        document.getElementById('humidity').innerText = `💧 Humidity: ${data.current.humidity}%`;
        document.getElementById('wind').innerText = `💨 Wind: ${data.current.wind_kph} km/h`;
    } catch (error) {
        alert('City not found! Try again.');
    }
}
