const jsonData = require("directory.json");
console.log(jsonData);

fetch(jsonData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject["business"];
        business.forEach(displayBus);
    });

function displayBus(bus) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let img = document.createElement("img");
    let busname = document.createElement("p");
    let busloc = document.createElement("p");
    let weburl = document.createElement("a");

    img.setAttribute("src", bus.imageurl);
    img.setAttribute("alt", `${bus.busname}`);
    busname.textContent = `${bus.busname} `;
    busloc.textContent = `${bus.location}`;
    weburl.textContent = `${bus.weburl}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(busname);
    card.appendChild(busloc);
    card.appendChild(weburl);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
}