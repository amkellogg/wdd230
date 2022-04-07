const jsonData = "https://amkellogg.github.io/wdd230/Final/ak.json";
// console.log(jsonData);

fetch(jsonData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const projects = jsonObject["projects"];
        projects.forEach(populateCards);
    });

function populateCards(projects) {
    // Create elements to add to the document
    let card = document.createElement("section");
    card.id = "cardhover";
    let img = document.createElement("img");

    let projectname = document.createElement("h2");
    let caption = document.createElement("p");

    let imgurl = document.createElement("a");
    imgurl.id = "imgurl";

    img.setAttribute("src", projects.image);
    img.setAttribute("alt", `${projects.projectname}`);
    projectname.textContent = `${projects.projectname} `;
    // caption.textContent = `${projects.caption} `;
    imgurl.innerHTML = `<a href="${img.imgurl}">${img}</a>`;
    imgurl.innerHTML = `<a href="${projects.imgurl}">${projects.caption}</a>`;
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(projectname);
    card.appendChild(caption);
    card.appendChild(imgurl);

    console.log(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("#cards").appendChild(card);
}

function show(x) {
    x.classList.toggle("newstyle");
}
//hamburger menu:

const hamburgerBtn = document.querySelector(".menuBar");
const navigation = document.querySelector(".navbar");

hamburgerBtn.addEventListener(
    "click",
    () => {
        navigation.classList.toggle("responsive");
    },
    false
);
