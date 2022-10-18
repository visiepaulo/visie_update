export default function initSaveMusic() {
    function saveMusicToLocalStorage(song) {
        const playlist = JSON.parse(localStorage.getItem("playlist")) || [];

        const { src } = song.querySelector("img");
        const { href } = song.querySelector("a");
        const title = song.querySelector("#title");
        const subtitle = song.querySelector("#subtitle");

        const songToSave = {
            src,
            href,
            title,
            subtitle,
        };

        playlist.push(songToSave);
        localStorage.setItem("playlist", JSON.stringify(playlist));
    }

    const addBtn = document.querySelectorAll("#add");
    addBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            saveMusicToLocalStorage(e.currentTarget.parentNode);
        });
    });
}
