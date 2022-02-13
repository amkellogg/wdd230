//Windchill temperature

const wind = document.querySelector("#WS").textContent;
const temp = document.querySelector("#temp").textContent;
console.log(temp);
const wc =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16);

WC = Math.round(wc);
const windChill = (document.querySelector("#windChill").innerHTML = WC);
