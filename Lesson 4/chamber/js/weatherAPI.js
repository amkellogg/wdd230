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
        document.querySelector("#weathericon").setAttribute("src", iconsrc);

        const windSpeed = jsObject.wind.speed;
        document.querySelector("#WS").textContent = windSpeed;
        console.log(windSpeed);

        //Get wind chill
        const wind = document.querySelector("#WS").textContent;
        const temp = document.querySelector("#current-temp").textContent;

        console.log(temp);
        console.log(wind);
        const windChill =
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(wind, 0.16) +
            0.4275 * temp * Math.pow(wind, 0.16);

        WC = Math.round(windChill);
        windChill = document.querySelector("#windChill").innerHTML = WC;

        const desc = jsObject.weather[0].description;
        document.querySelector("#weathericon").setAttribute("alt", desc);

        // document.querySelector("#icon-src").textContent = iconsrc;
        // document.querySelector("figcaption").textContent = desc;
    });
