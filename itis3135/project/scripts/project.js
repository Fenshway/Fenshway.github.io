/*initilized variables*/
var slide;
var slideImages;

var prevButton;
var nextButton;

let counter;
var size;
/*onload function to create slideshow*/
function bugFix()
{
slide = document.querySelector(".slideshow-slide");
slideImages = document.querySelectorAll(".slideshow-slide img");

prevButton = document.querySelector("#prevButton");
nextButton = document.querySelector("#nextButton");

counter = 1;
size = slideImages[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
/*adds an EventListener to nextButton to progress to the next image in slideshow*/
nextButton.addEventListener("click", function()
{
    if (counter >= slideImages.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter += 1;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
/*adds an EventListener to prevButton to progress to the previous image in slideshow*/
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
}

/*Fetches my header html code stored in "components/header.html" using ajax*/
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
/*Fetches my footer html code stored in "components/footer.html" using ajax however I do not use this function anymore
because it broke my validation buttons loctated in the footer no longer worked properly*/
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
