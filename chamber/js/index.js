function show() {
    button.classList.toggle("newstyle");
}
//hamburger menu:

const hamburgerBtn = document.querySelector(".ham");
const navigation = document.querySelector(".navbar");

hamburgerBtn.addEventListener(
    "click",
    () => {
        navigation.classList.toggle("responsive");
    },
    false
);

// date:
var currentDate = new Date();
let weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentDate);
let monthDay = currentDate.getDate();
let month = new Intl.DateTimeFormat("en-us", { month: "long" }).format(currentDate);
let year = currentDate.getFullYear();
var date = new Date(document.lastModified).toLocaleDateString("en-US");
var time = new Date(document.lastModified).toLocaleDateString("en-US", { hour12: false });
var longDate = weekDay + ", " + monthDay + " " + month + " " + year;
var dateTime = date + " " + time;

document.getElementById("longDate").textContent = longDate;
document.getElementById("yearHeader").textContent = year;
document.getElementById("updatedDate").textContent = dateTime;
