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
    
}