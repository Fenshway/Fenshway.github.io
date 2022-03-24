const employees = [];
const salaries = [];
let $ = function(id)
{
    return document.getElementById(id);
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
    else {
    salary = salary.toFixed(2);
    salaries.push(salary)
    employees.push(employee)
    } 
}
function displayResults()
{
    let averageSalary = 0;
    let highestSalary = 0;
    var personTopSalary = "";
    let totalSalary = 0;
    for (let i = 0; i < salaries.length; i++)
    {
        let tempSalary = parseFloat(salaries[i]);
        totalSalary += tempSalary;
        
        if (salaries[i] > highestSalary)
        {
            personTopSalary = employees[i];
            highestSalary = salaries[i];
        }
    }
    averageSalary = (totalSalary/salaries.length);
    $('results').innerHTML ="<h2>Results</h2>" + "<p>Average Salary: $" + averageSalary.toLocaleString()
       + "</p>" + "<p>Highest Earning Employee: " + personTopSalary + " - $" + highestSalary.toLocaleString() + "</p>";
}
function displaySalary()
{
    let createTable = "<table><tr><th>Employee</th><th>Salary</th></tr>";
    for(let i = 0; i < employees.length; i++)
    {
        createTable += "<tr><td>" + employees[i] + "</td><td>$" + salaries[i].toLocaleString() + "</td></tr>";
    }
    createTable += "</table>";
    $("results_table").innerHTML = createTable;
}