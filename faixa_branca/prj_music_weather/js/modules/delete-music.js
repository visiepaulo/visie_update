import initMountPlaylist from "./mount-playlist.js";

export default function initDeleteMusic() {
    const deleteBtns = document.querySelectorAll("#delete");

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const playlist = JSON.parse(localStorage.getItem("playlist"));
            playlist.splice(e.currentTarget.dataset.value, 1);
            localStorage.setItem("playlist", JSON.stringify(playlist));
            initMountPlaylist();
        });
    });
}
