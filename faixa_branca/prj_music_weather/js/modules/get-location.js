import initConsumeWeather from "./consume-weather.js";

export default function initGetLocation() {
    const btn = document.getElementById("tryBtn");
    const container = document.getElementById("container");

    function getPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        initConsumeWeather(lat, lon);
    }

    function errorPosition() {
        container.innerHTML =
            "Você precisa autorizar a localização em seu navegador";
    }

    function handleClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                getPosition,
                errorPosition
            );
        } else {
            container.innerHTML = "Houve um erro";
        }
    }

    btn.addEventListener("click", handleClick);
}
