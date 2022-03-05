// const jsonData = require("directory.json");
const jsonData =
    "https://amkellogg.github.io/wdd230/Lesson%204/chamber/js/directory.json";
console.log(jsonData);

let business = {};

fetch(jsonData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        business = jsonObject["business"];

        // business.forEach(displayBus);
        business.forEach(displayBus);
    });

function displayBus(bus) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let img = document.createElement("img");
    let busname = document.createElement("p");
    let busloc = document.createElement("p");
    let phone = document.createElement("p");
    let weburl = document.createElement("a");

    img.setAttribute("src", bus.imageurl);
    console.log(bus.imageurl);
    img.setAttribute("alt", `${bus.busname}`);
    busname.textContent = `${bus.busname} `;
    busloc.textContent = `${bus.location}`;
    phone.textContent = `${bus.phone}`;
    weburl.textContent = `${bus.weburl}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(busname);
    card.appendChild(busloc);
    card.appendChild(phone);
    card.appendChild(weburl);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("#cards").appendChild(card);
}
// function displaybus() {}

//Show as a list

function displayList(bus) {
    // Create elements to add to the document
    let list_row = document.createElement("tr");

    let busname = document.createElement("td");
    busname.textContent = `${bus.busname} `;

    let busloc = document.createElement("td");
    busloc.textContent = `${bus.location}`;

    let phone = document.createElement("td");
    phone.textContent = `${bus.phone}`;

    let weburl = document.createElement("a");
    weburl.setAttribute("href", bus.weburl);
    weburl.textContent = `${bus.weburl}`;

    // Add/append the section(card) with the h2 element
    let table = document.querySelector("#list");
    table.appendChild(list_row);
    table.appendChild(busname);
    table.appendChild(busloc);
    table.appendChild(phone);
    table.appendChild(weburl);

    // Add/append the existing HTML div with the cards class with the section(card)
    // document.querySelector("#list").appendChild(table);
}

//Buttons and window rezie
// const display = (displayFunction) => {
//     business.forEach(displayFunction);
// };

const cardBtn = document.querySelector("#allCards");
cardBtn.addEventListener("click", displayBus);

const listBtn = document.querySelector("#allList");
listBtn.addEventListener("click", (event) => {
    business.forEach(displayList);
    console.log(listBtn);
});
// listBtn.addEventListener("click", displayList);

function windowSize() {
    if (window.innerWidth > 800 && window.innerWidth < 1000) {
        displayBus();
    } else {
        displayList();
    }
}
// window.addEventListener("resize", reportWindowSize);
// window.addEventListener("load", reportWindowSize);
