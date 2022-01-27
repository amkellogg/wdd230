const button = document.querySelector(".btn");

function show() {
    //button.classList.add("newstyle");
    button.classList.toggle("newstyle");
}

button.addEventListener("click", show);

//arrow function:
//button.addEventListener("click", () => {
//    button.classList.add("newstyle");
//});
