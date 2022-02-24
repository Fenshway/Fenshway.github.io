function scriptTest()
{
    alert("Hey my script is running");
}
function jpDate()
{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.write("Today is " + time + " on " + today.toDateString());
}
function displayGreeting()
{
    let readName = document.getElementById("inputName").value;
    let readMood = document.getElementById("inputMood").value;
    document.getElementById("jpGreeting").innerHTML = ("<p>Greetings " + readName + ", I am glad you are " + readMood + "!");
}
function calculateCm()
{
    let numString = prompt("Convert a number from minutes to seconds.");
    let numString = prompt("Convert your height from inches to centimeters");
    let pNum = parseFloat(numString);
    let cm = pNum * 2.54;
    cm = cm.toFixed(2);
    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert("Your height is " + cm + "cm.");
    }
}
function calculateCelsius()
{
    let numString = prompt("Convert the current temperature from fahrenheit to celsius");
    let pNum = parseFloat(numString);
    let celsius = (pNum - 32) * .5556;
    celsius = celsius.toFixed(2);
    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert("The current temperature of " + pNum + " is " + celsius + " in celsius.");
    }
}
function calculateKMH()
{
    let numString = prompt("Convert miles per hour to kilometers per hour");
    let pNum = parseFloat(numString);
    let kilometers = pNum * 1.60934;
    kilometers = kilometers.toFixed(2);
    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert(pNum + " miles per hour is equal to " + kilometers + " per hour.");
    }
}
function calculateKG()
{
    let numString = prompt("Convert your weight from lbs to kilograms");
    let pNum = parseFloat(numString);
    let kilograms = pNum * .453592;
    kilograms = kilograms.toFixed(1);

    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert("Your weight is " + kilograms + " in kilograms.");
    }
}
function calculateLitres()
{
    let numString = prompt("Convert gallons to litres");
    let pNum = parseFloat(numString);
    let litres = gallons * 3.78541;
    litres = litres.toFixed(2);
    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert(pNum + " gallons is equal to " + litres + ".");
    }
}
