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
const currentDate = new Date();
let weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentDate);
let monthDay = currentDate.getDate();
let month = new Intl.DateTimeFormat("en-us", { month: "long" }).format(currentDate);
let year = currentDate.getFullYear();
const date = new Date(document.lastModified).toLocaleDateString("en-US");
const time = new Date(document.lastModified).toLocaleDateString("en-US", {
    hour12: false,
});
const longDate = weekDay + ", " + monthDay + " " + month + " " + year;
const dateTime = date + " " + time;

document.getElementById("longDate").textContent = longDate;
document.getElementById("yearHeader").textContent = year;
document.getElementById("updatedDate").textContent = dateTime;

//to show mon tues announcement message
let myDate = new Date();
const message = document.querySelector(".msg");

if (myDate.getDay() == 1 || my.getDay() == 6) {
    message.style.display = "block";
}
