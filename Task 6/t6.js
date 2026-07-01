// ======================================
// Task 1 - Find the Highest Salary
// ======================================

let employees = [
  {
    name: "Naveen",
    id: 101,
    salary: 30000,
  },
  {
    name: "John",
    id: 102,
    salary: 60000,
  },
  {
    name: "Arun",
    id: 103,
    salary: 45000,
  }, 
];

console.log("========== Task 1 ==========");

let highestEmployee = employees[0];

employees.forEach((employee) => {
  if (employee.salary > highestEmployee.salary) {
    highestEmployee = employee;
  }
});

console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);


// ======================================
// Task 2 - Find Employee by ID
// ======================================

console.log("\n========== Task 2 ==========");

let searchId = 103;

let foundEmployee = employees.find((employee) => {
  return employee.id === searchId;
});

if (foundEmployee) {
  console.log("Employee Found");
  console.log("Name :", foundEmployee.name);
  console.log("Salary :", foundEmployee.salary);
} else {
  console.log("Employee Not Found");
}


// ======================================
// Task 3 - Calculate Salary with Bonus
// ======================================

console.log("\n========== Task 3 ==========");

let bonus = 5000;

employees.forEach((employee) => {
  console.log(employee.name + " :", employee.salary + bonus);
});


// ======================================
// Task 4 - Experience Check
// ======================================

console.log("\n========== Task 4 ==========");

let employeeExperience = [
  {
    name: "Naveen",
    experience: 2,
  },
  {
    name: "John",
    experience: 7,
  },
  {
    name: "Arun",
    experience: 5,
  },
];

employeeExperience.forEach((employee) => {
  if (employee.experience >= 5) {
    console.log(employee.name + " - Senior Employee");
  } else {
    console.log(employee.name + " - Junior Employee");
  }
});


// ======================================
// Task 5 - Display Only Employee Names
// ======================================

console.log("\n========== Task 5 ==========");

employees.forEach((employee) => {
  console.log(employee.name);
});


// ======================================
// Task 6 - Display Employee IDs
// ======================================

console.log("\n========== Task 6 ==========");

employees.forEach((employee) => {
  console.log(employee.id);
});


// ======================================
// Task 7 - Find Total Salary
// ======================================

console.log("\n========== Task 7 ==========");

let totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log("Total Salary :", totalSalary);


// ======================================
// Task 8 - Employees Earning More Than 40000
// ======================================

console.log("\n========== Task 8 ==========");

let highSalaryEmployees = employees.filter((employee) => {
  return employee.salary > 40000;
});

highSalaryEmployees.forEach((employee) => {
  console.log(employee.name);
});


// ======================================
// Task 9 - Increase Salary
// ======================================

console.log("\n========== Task 9 ==========");

let increasedSalary = employees.map((employee) => {
  return {
    name: employee.name,
    salary: employee.salary + 5000,
  };
});

increasedSalary.forEach((employee) => {
  console.log(employee.name + " :", employee.salary);
});


// ======================================
// Task 10 - Employee Report
// ======================================

console.log("\n========== Task 10 ==========");

employees.forEach((employee) => {
  console.log(`
Employee Name : ${employee.name}
Employee ID   : ${employee.id}
Salary        : ${employee.salary}
`);
});


// ======================================
// BONUS TASK
// ======================================

console.log("\n========== BONUS TASK ==========");

// Total Number of Employees

console.log("Total Employees :", employees.length);


// Highest Salary

let highest = employees[0];

employees.forEach((employee) => {
  if (employee.salary > highest.salary) {
    highest = employee;
  }
});

console.log("Highest Salary :", highest.salary);


// Lowest Salary

let lowest = employees[0];

employees.forEach((employee) => {
  if (employee.salary < lowest.salary) {
    lowest = employee;
  }
});

console.log("Lowest Salary :", lowest.salary);


// Total Salary

let companySalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log("Total Salary :", companySalary);


// Employee with Highest Salary

console.log("Highest Salary Employee :", highest.name);


// Employee with Lowest Salary

console.log("Lowest Salary Employee :", lowest.name);


// Employees earning more than 40000

console.log("\nEmployees earning more than 40000");

employees
  .filter((employee) => employee.salary > 40000)
  .forEach((employee) => {
    console.log(employee.name);
  });


// Search Employee by ID

console.log("\nSearch Employee");

let searchEmployeeId = 102;

let searchEmployee = employees.find((employee) => {
  return employee.id === searchEmployeeId;
});

if (searchEmployee) {
  console.log("Employee Found");
  console.log("Name :", searchEmployee.name);
  console.log("Salary :", searchEmployee.salary);
} else {
  console.log("Employee Not Found");
}


// Add Bonus

console.log("\nSalary After Bonus");

employees
  .map((employee) => {
    return {
      name: employee.name,
      salary: employee.salary + 5000,
    };
  })
  .forEach((employee) => {
    console.log(employee.name + " : " + employee.salary);
  });


// Professional Employee Report

console.log("\nProfessional Employee Report");

employees.forEach((employee) => {
  console.log(`
=========================
Employee Name : ${employee.name}
Employee ID   : ${employee.id}
Salary        : ₹${employee.salary}
=========================
`);
});