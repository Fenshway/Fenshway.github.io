function swap(element)
{ 
    document.getElementById("caption").innerHTML = element.title;
    document.getElementById("image").src = element.src;
}

/*const test = document.querySelector("#img2");
img2.addEventListener("click", function()
{
    if (counter >= slideImages.length - 1) return;
    document.getElementById("image").src = (im2.style.transition = "transform 0.4s ease-in-out");

});*/