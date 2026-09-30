const employees = [];

function collectEmployees() {
  

  while (true) {
    const firstName = prompt("What is the employee's first name?");
    const lastName = prompt("What is the employee's last name?");
    let salary = prompt("What is the employee's salary?");

    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = Number(salary);
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);

    const continueAdding = confirm("Would you like to add another employee?");

    if (!continueAdding) {
      break;
    }
  }

  return employees;
}


function displayAverageSalary(employees) {
  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }

  const averageSalary = totalSalary / employees.length;

  console.log(
    `The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`
  );
}


function getRandomEmployee(employees) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
}

function trackEmployeeData() {
  collectEmployees();

  employees.sort(function(a, b) {
    return a.lastName.localeCompare(b.lastName);
  });

  displayEmployees(employees);
  displayAverageSalary(employees);
  getRandomEmployee(employees);
}

function viewPayroll() {
  const payrollTableBody = document.getElementById("payrollTableBody");

  payrollTableBody.innerHTML = "";

  employees.forEach(function(employee) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>$${employee.salary}</td>
    `;

    payrollTableBody.appendChild(row);
  });
}
document
.getElementById("addEmployeeBtn").addEventListener("click", trackEmployeeData);
document
.getElementById("viewPayrollBtn").addEventListener("click", viewPayroll);