export default function initConsumeShazam(temp) {
    let genre;
    if (temp < 16) genre = "ROCK";
    if (temp > 16 && temp < 24) genre = "ALTERNATIVE";
    if (temp > 24 && temp < 32) genre = "POP";
    if (temp > 32) genre = "DANCE";

    const container = document.getElementById("playlist");

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
                    const songHtml = `<li class="song">
                                            <a href="${song.url}">
                                                <figure>
                                                    <img src="${song.images.background}" alt="">
                                                    <figcaption class="song-desc">
                                                        <span>${song.title}</span>
                                                        <span>${song.subtitle}</span>
                                                    </figcaption>
                                                </figure>
                                            </a><button id="add">Salvar</button>
                                        </li>`;
                    container.innerHTML += songHtml;
                });
            })
            .catch((err) => console.error(err));
    }
}
