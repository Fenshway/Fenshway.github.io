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
    document.getElementById("jpGreeting").innerHTML = (
        "<p>Greetings " + readName + ", I am glad you are " + readMood + "!"
    )
}
function calculateSeconds()
{
    let numString = prompt("Convert a number from minutes to seconds.");
    let pNum = parseFloat(numString);
    let seconds = pNum * 60;
    if (isNaN(pNum))
    {
        alert("Not a number!");
    }
    else
    {
        alert("The amount of seconds in " + pNum + " is " + seconds);
    }
}
function calculateCelsius()
{
    let numString = prompt("Convert fahrenheit to celsius");
    let pNum = parseFloat(numString);
    let celsius = (pNum - 32) * .5556;
    celsius = celsius.toFixed(2);
    alert(pNum + " is " + celsius + " in celsius.");
}
