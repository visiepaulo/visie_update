export default function initMountPlaylist() {
    const saved = document.getElementById("saved");
    const playlist = JSON.parse(localStorage.getItem("playlist"));

    if (playlist) {
        playlist.forEach((song) => {
            const li = document.createElement("li");
            li.classList.add("song");
            const a = document.createElement("a");
            a.href = `${song.href}`;
            const figure = document.createElement("figure");
            const figcaption = document.createElement("figcaption");
            const img = document.createElement("img");
            img.src = `${song.src}`;
            const title = document.createElement("span");
            const subtitle = document.createElement("span");
            const button = document.createElement("button");
            button.id = "delete";
            button.innerText = "Excluir";
            title.id = "title";
            title.innerText = `${song.title}`;
            subtitle.id = "subtitle";
            subtitle.innerText = `${song.subtitle}`;
            figcaption.classList.add("song-desc");
            figcaption.appendChild(title);
            figcaption.appendChild(subtitle);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            li.appendChild(a).appendChild(figure);
            li.appendChild(button);
            saved.appendChild(li);
        });
    }
}
