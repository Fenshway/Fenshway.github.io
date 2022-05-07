const slide = document.querySelector(".slideshow-slide");
const slideImages = document.querySelectorAll(".slideshow-slide img");

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

let counter = 1;
const size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener("click", function()
{
    if (counter >= slideImages.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener("click", function()
{
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter -= 1;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', function() 
{
    if (slideImages[counter].id === 'lastClone')
    {
        slide.style.transition = "none";
        counter = slideImages.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slideImages[counter].id === 'firstClone')
    {
        slide.style.transition = "none";
        counter = slideImages.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

function bugFix()
{
slide = document.querySelector(".slideshow-slide");
slideImages = document.querySelectorAll(".slideshow-slide img");

prevButton = document.querySelector("#prevButton");
nextButton = document.querySelector("#nextButton");

counter = 1;
size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function loadHeader() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxHeader").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "components/header.html", true);
    xhttp.send();
}

function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajaxFooter").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "components/footer.html", true);
    xhttp.send();
}
