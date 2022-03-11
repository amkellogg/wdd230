// Napa = api.openweathermap.org/data/2.5/weather?id=5376101&appid=791ff65aa36a76dc396d4ff239a05ee4
// Alaska = api.openweathermap.org/data/2.5/weather?id=5861897&appid=791ff65aa36a76dc396d4ff239a05ee4

const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?id=5376101&appid=791ff65aa36a76dc396d4ff239a05ee4";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector("#current-temp").textContent = (
            (jsObject.main.temp - 273.15) * 1.8 +
            32
        ).toFixed(1);

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector("#icon-src").textContent = iconsrc;
        document.querySelector("#weathericon").setAttribute("src", iconsrc);
        document.querySelector("#weathericon").setAttribute("alt", desc);
        document.querySelector("figcaption").textContent = desc;
    });
