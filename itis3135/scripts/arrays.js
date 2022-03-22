const employees = [];
const salaries = [];
let $ = function(id)
{
    return document.getElementById(id);
}
function scriptTest()
{
    alert("Hey my script is running");
}
function addSalary()
{
    let salary = $("salary").value;
    let employee = $("employee").value;
    salary = parseFloat(salary)
    if (isNaN(salary))
    {
        alert("Submission failed. Salary contained incorrect input")
    }
    salaries.push(salary)
    employees.push(employee)
}
function displayResults()
{
    let averageSalary = 0;
    let highestSalary = 0;
    var personTopSalary;
    let totalSalary = 0;
    for (let i = 0; i < salaries.length; i++)
    {
        let resultSalary = salaries[i];
        totalSalary += resultSalary;
    }
    averageSalary = totalSalary/salaries.length;
    for (let i = 0; i < salaries.length; i++)
    {
        if (salaries[i] > highestSalary)
        {
            personTopSalary = employees[i];
            highestSalary = salaries[i];
        }
    }
    $('results').innerHTML ="<h2>Results</h2>" + "<p>Average Salary: " + averageSalary + "</p>" + "<p>Highest Earning Employee: " + personTopSalary + " - $" + highestSalary + "</p>";

}
function displaySalary()
{
    let createTable ="<table><tr><th>Employee</th><th>Salary</th></tr>";
    for(let i = 0; i < employees.length; i++)
    {
        createTable += "<tr><td>"+ employees[i] + "</td><td>$" + salaries[i].toFixed(2).toLocaleString() + "</td></tr>";
    }
    createTable += "</table>";
    document.getElementById("results_table").innerHTML = createTable;

}