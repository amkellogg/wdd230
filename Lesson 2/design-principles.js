let currentYear = new Date().getFullYear();
let lastUpdate = document.lastModified;
let lastUpdateWithString = `Last Updated: ${lastUpdate}`;

document.querySelector("#year").innerHTML =
    `&copy; ${currentYear}` +
    ` Anna Kastner | California | ` +
    `${lastUpdateWithString}`;

console.log(lastUpdate);
