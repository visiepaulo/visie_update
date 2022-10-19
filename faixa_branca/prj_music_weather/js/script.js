import initDeleteMusic from "./modules/delete-music.js";
import initGetLocation from "./modules/get-location.js";
import initMountPlaylist from "./modules/mount-playlist.js";
import initSaveMusic from "./modules/save-music.js";

initMountPlaylist();
initDeleteMusic();
initGetLocation();

const playlist = document.querySelector("#playlist");

if (playlist) {
    initSaveMusic();
}
