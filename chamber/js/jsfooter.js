let currentYear = new Date().getFullYear();
let lastUpdate = document.lastModified;
let lastUpdateWithString = `Last Updated: ${lastUpdate}`;

document.querySelector("#year").innerHTML =
    `&copy; ${currentYear}` +
    ` Anna Kastner | WDD 130 Project | ` +
    `${lastUpdateWithString}`;

console.log(lastUpdate);
