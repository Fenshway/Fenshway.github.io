var slide;
var slideImages;

var prevButton;
var nextButton;

let counter;
var size;

function bugFix()
{
slide = document.querySelector(".slideshow-slide");
slideImages = document.querySelectorAll(".slideshow-slide img");

prevButton = document.querySelector("#prevButton");
nextButton = document.querySelector("#nextButton");

counter = 1;
size = slideImages[0].clientWidth;

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
}
