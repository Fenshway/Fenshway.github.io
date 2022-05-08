/*These functions use jQuery to alert the user that their form has been submitted*/
$(document).ready(function () {
    $("#formBtn").click(function () {
        alert("Form Submission Successful!");
    });
});
$(document).ready(function () {
    $("#contactBtn").click(function () {
        alert("Thank you for reaching out to us. We will return your email as soon as possible");
    });
});