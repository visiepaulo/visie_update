import initCreateSong from "./create-song.js";
import initDeleteMusic from "./delete-music.js";

export default function initMountPlaylist() {
    const saved = document.getElementById("saved");
    const playlist = JSON.parse(localStorage.getItem("playlist"));
    saved.innerHTML = "";

    if (playlist) {
        playlist.forEach((song, index) => {
            saved.appendChild(initCreateSong(song, index));
        });
    }

    initDeleteMusic();
}
