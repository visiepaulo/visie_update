import initGetLocation from "./modules/get-location.js";
import initMountPlaylist from "./modules/mount-playlist.js";
import initSaveMusic from "./modules/save-music.js";

initMountPlaylist();

const playlist = document.querySelector("#playlist");

if (playlist) {
    initSaveMusic();
}

initGetLocation();
