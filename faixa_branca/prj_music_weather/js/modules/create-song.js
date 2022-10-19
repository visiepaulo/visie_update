export default function initCreateSong(song, index) {
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
    button.id = `${song.buttonId}`;
    button.innerText = `${song.buttonTxt}`;
    if (index !== undefined) {
        button.dataset.value = index;
    }
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
