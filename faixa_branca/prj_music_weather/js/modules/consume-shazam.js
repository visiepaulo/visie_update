import initCreateSong from "./create-song.js";
import initSaveMusic from "./save-music.js";

export default function initConsumeShazam(temp) {
    let genre;
    if (temp <= 16) genre = "ROCK";
    if (temp > 16 && temp <= 24) genre = "ALTERNATIVE";
    if (temp > 24 && temp <= 32) genre = "POP";
    if (temp > 32) genre = "DANCE";

    const container = document.getElementById("playlist");
    const genreTitle = document.getElementById("genre");

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "c3aced0aa2msh32455b3f92bfdd3p14d088jsn7738bbe5faeb",
            "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
    };

    if (genre) {
        fetch(
            `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genre}`,
            options
        )
            .then((response) => response.json())
            .then((object) => {
                Object.values(object).forEach((song) => {
                    const src = `${song.images.background}`;
                    const href = `${song.url}`;
                    const title = `${song.title}`;
                    const subtitle = `${song.subtitle}`;
                    const buttonTxt = "Salvar";
                    const buttonId = "add";

                    const songToMount = {
                        src,
                        href,
                        title,
                        subtitle,
                        buttonTxt,
                        buttonId,
                    };

                    container.appendChild(initCreateSong(songToMount));
                });
                genreTitle.innerText = genre;
                initSaveMusic();
            })
            .catch((err) => console.error(err));
    }
}
