function scriptTest()
{
    alert("Hey my script is running");
}
function testFunc()
{
    alert("hey you tested me");
}
function jpDate()
{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.write("Today is " + time + " on " + today.toDateString());
}
