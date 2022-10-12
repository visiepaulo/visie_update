export default async function initConsumeWeather(lat, lon) {
    const key = "8738e03effc040bc075baa2cea0debdb";
    const container = document.getElementById("container");

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    );

    const data = await response.json();

    const city = data.name;
    const { country } = data.sys;
    const temp = Math.round(data.main.temp);
    const feels = Math.round(data.main.feels_like);
    container.innerHTML = `<h4>${city}, ${country}</h4> <span>Temperatura: ${temp} °C</span><br> <span>Sensação: ${feels}°C</span>`;
}
