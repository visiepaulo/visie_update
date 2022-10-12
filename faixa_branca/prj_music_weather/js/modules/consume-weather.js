import initConsumeShazam from "./consume-shazam.js";

export default function initConsumeWeather(lat, lon) {
    const key = "8738e03effc040bc075baa2cea0debdb";
    const container = document.getElementById("container");

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    )
        .then((response) => response.json())
        .then((r) => {
            const city = r.name;
            const { country } = r.sys;
            const temp = Math.round(r.main.temp);
            const feels = Math.round(r.main.feels_like);
            container.innerHTML = `<h4>${city}, ${country}</h4> <span>Temperatura: ${temp} °C</span><br> <span>Sensação: ${feels}°C</span>`;

            initConsumeShazam(temp);
        });
}
