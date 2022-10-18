export default function initCreateSong(song) {
    const li = document.createElement("li", { class: "song" });
    const a = document.createElement("a");
    a.href = `${song.url}`;
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const img = document.createElement("img");
    img.src = `${song.images.background}`;
    const title = document.createElement("span");
    const subtitle = document.createElement("span");
    const button = document.createElement("button");
    button.id = "add";
    button.innerText = "Salvar";
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
    return li;
}
