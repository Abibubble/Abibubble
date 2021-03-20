// --------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// --------------------------------------------------------------------- Slideshow

var slideshow = document.getElementById("slideshow");
var slideIndex = 0;
showSlides();

function showSlides() {
    slideshow.classList.remove("header-image1");
    slideshow.classList.remove("header-image2");
    slideshow.classList.remove("header-image3");
    if (slideIndex === 0) {
        slideshow.classList.add("header-image1");
        slideIndex++;
    } else if (slideIndex === 1) {
        slideshow.classList.add("header-image2");
        slideIndex++;
    } else if (slideIndex === 2) {
        slideshow.classList.add("header-image3");
        slideIndex = 0;
    } else {
        console.log("Error with slideshow images");
    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}