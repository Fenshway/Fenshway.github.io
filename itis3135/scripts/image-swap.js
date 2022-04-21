function swap(element)
{ 
    document.getElementById("caption").innerHTML = element.title;
    document.getElementById("image").src = element.src;
}