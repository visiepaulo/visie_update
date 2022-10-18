import initGetLocation from "./modules/get-location.js";
import initSaveMusic from "./modules/save-music.js";

const playlist = document.querySelector("#playlist");

if (playlist) {
    initSaveMusic();
}

initGetLocation();
