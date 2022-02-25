function imagesLoad() {
    const images = document.querySelectorAll("img");

    const options = { threshold: [0.5] };

    function preloadImage(img) {
        const source = img.getAttribute("data-src");
        img.src = source;
    }

    const io = new IntersectionObserver((entries, io) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                //call a function and send in the image that is currently intersecting
                preloadImage(entry.target);
                //stop oberving it
                io.unobserve(entry.target);
            }
            // console.log(entries);
        });
    }, options);

    images.forEach((image) => {
        io.observe(image);
    });
}

//, currDate.toString()

function visits() {
    //check to see if there is a last date
    //get the last date (get item "lastDate")
    //subtract it from the current date
    //else set todays date("last date = date.now")

    const visitElement = document.getElementById("visitorsDates");
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem("lastVisit") ?? currentVisit;
    localStorage.setItem("lastVisit", currentVisit);

    // if (!localStorage.getItem("lastVisit")) {
    // outputDate();
    // } else {
    // }

    // console.log(visitElement);
    // function outputDate() {
    //     localStorage.setItem("lastVisit", visitElement.value);
    //     // document.getElementById("lastVisit").value = prevDate;

    //     setDate();
    // }

    function setDate() {
        let difference = currentVisit - lastVisit;
        let daysDifference = Math.floor(difference / 100 / 600 / 60 / 24);
        visitElement.textContent = daysDifference;

        currentVisit.getDay();
        console.log(currentVisit);

        if (daysDifference != 0) {
            visitElement.textContent = currentVisit;
        }
    }
    console.log(visitElement);
    setDate();
}

imagesLoad();
visits();
