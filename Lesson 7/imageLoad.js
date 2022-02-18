const images = document.querySelectorAll("img");

const options = { threshold: [0] };

function preloadImage(img) {
    const source = img.getAttribute("data-src");
    img.src = source;
}

const io = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
