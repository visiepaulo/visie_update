import initMountPlaylist from "./mount-playlist.js";

export default function initSaveMusic() {
    function saveMusicToLocalStorage(song) {
        const playlist = JSON.parse(localStorage.getItem("playlist")) || [];

        const { src } = song.querySelector("img");
        const { href } = song.querySelector("a");
        const title = song.querySelector("#title").innerText;
        const subtitle = song.querySelector("#subtitle").innerText;
        const buttonTxt = "Excluir";
        const buttonId = "delete";

        const songToSave = {
            src,
            href,
            title,
            subtitle,
            buttonTxt,
            buttonId,
        };

        playlist.push(songToSave);
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }

    const addBtn = document.querySelectorAll("#add");
    addBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            saveMusicToLocalStorage(e.currentTarget.parentNode);
            initMountPlaylist();
        });
    });
}
