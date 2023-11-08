
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = 0;

    // Add fade-in animation
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            slides[slideIndex - 1].style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

setInterval(function () {
    plusSlides(1);
}, 10000); // This will advance the slide every 3 seconds (3000 milliseconds)

function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

