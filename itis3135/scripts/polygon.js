function getShape()
{
    let numString = prompt("The Jet Parrots would like you to enter a number 1-10 to find out which polygon correlates with your number.");
    let pNum = parseFloat(numString);
    let polygon = "out of bounds";
    pNum = Math.abs(pNum);
    pNum = Math.round(pNum);
    switch (pNum)
    {
        case 1:
            polygon = "henagon";
            break;
        case 2:
            polygon = "digon";
            break;
        case 3:
            polygon = "trigon";
            break;
        case 4:
            polygon = "tetragon";
            break;
        case 5:
            polygon = "pentagon";
            break;
        case 6:
            polygon = "hexagon";
            break;
        case 7:
            polygon = "heptagon";
            break;
        case 8:
            polygon = "octagon";
            break;
        case 9:
            polygon = "enneagon";
            break;
        case 10:
            polygon = "decagon";
            break;
    }   
    return polygon;
}

function validateEntry() //what is the purpose of this? This could all be done in one function
{
    if (htmlShape != "out of bounds")
    {
        alert("Your shape is a " + htmlShape);
    }
    else 
    {
        alert("Your entry is out of bounds");
    }
}