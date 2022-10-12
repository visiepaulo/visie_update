export default function initGetLocation() {
    const btn = document.getElementById("tryBtn");
    const response = document.getElementById("response");

    function getPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat, lon);
    }

    function errorPosition() {
        response.innerHTML =
            "Você precisa autorizar a localização em seu navegador";
    }

    function handleClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                getPosition,
                errorPosition
            );
        } else {
            response.innerHTML = "Houve um erro";
        }
    }

    btn.addEventListener("click", handleClick);
}
