# PROJETO MUSIC WEATHER

Dada uma localização (latitude e longitude), a aplicação busca na API OpenWeather a temperatura relativa da localização e assim que retornada a resposta, é efetuada uma nova requisição, desta vez para a API do Shazam, onde retorna uma lista de músicas recomendadas para o clima atual.

-   Caso a temperatura seja maior que 32° C, é retornada uma lista de DANCE;
-   Caso a temperatura seja menor que 32° C e maior que 24° C, é retornada uma lista de POP;
-   Caso a temperatura seja menor que 24° C e maior que 16° C, é retornada uma lista de ALTERNATIVE;
-   E caso a temperatura seja menor que 16° C, é retornada uma lista de ROCK.

É necessário inserir (e possuir) as respectivas Keys das API's nos arquivos JS consume-weather e consume-shazam.

Links para as API'S:

<a href="https://openweathermap.org/">OpenWeather</a>
<a href="https://rapidapi.com/tipsters/api/shazam-core/">Shazam</a>

###

# Este projeto cobre os seguintes requisitos:

## HTML

-   Sintaxe básica, tags e atributos,
-   Semântica

## CSS

-   Basic Selectors ( Class, Tags, ID ), Colors, Backgrounds, Typography, Sizes, Display, Rounded Corners

## HTML5 APIs

-   localStorage
-   sessionStorage
-   GeoLocation

## Navegador e rede

-   fetch
