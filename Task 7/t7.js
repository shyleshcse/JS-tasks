// ============================
// Task 1 - Student Management System
// ============================
console.log("=== Task 1: Student Management System ===");

let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
];

// Print all students
console.log("All Students:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Print only student names
console.log("Student Names:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// Find student ID 102
console.log("Student with ID 102:");
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 102) {
        console.log(students[i]);
    }
}

// Print students who passed (mark >=35)
console.log("Students who Passed:");
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
        console.log(students[i].name);
    }
}

// Count total students
console.log("Total Students: " + students.length);


// ============================
// Task 2 - Employee Salary System
// ============================
console.log("\n=== Task 2: Employee Salary System ===");

let employees = [
    {
        name: "Naveen",
        salary: 30000
    },
    {
        name: "John",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 60000
    }
];

// Find highest salary
let highest = employees[0].salary;
let highestName = employees[0].name;
for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest) {
        highest = employees[i].salary;
        highestName = employees[i].name;
    }
}
console.log("Highest Salary: " + highestName + " - ₹" + highest);

// Find lowest salary
let lowest = employees[0].salary;
let lowestName = employees[0].name;
for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary < lowest) {
        lowest = employees[i].salary;
        lowestName = employees[i].name;
    }
}
console.log("Lowest Salary: " + lowestName + " - ₹" + lowest);

// Add ₹5000 bonus
console.log("After Bonus:");
for (let i = 0; i < employees.length; i++) {
    employees[i].salary += 5000;
    console.log(employees[i].name + ": ₹" + employees[i].salary);
}

// Print total salary
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
}
console.log("Total Salary: ₹" + totalSalary);

// Print employees earning above ₹40,000
console.log("Employees above ₹40,000:");
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }
}


// ============================
// Task 3 - Shopping Cart
// ============================
console.log("\n=== Task 3: Shopping Cart ===");

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

// Print product names
console.log("Product Names:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}

// Print total bill
let totalBill = 0;
for (let i = 0; i < products.length; i++) {
    totalBill += products[i].price;
}
console.log("Total Bill: ₹" + totalBill);

// Search product "Mouse"
console.log("Search for Mouse:");
for (let i = 0; i < products.length; i++) {
    if (products[i].name === "Mouse") {
        console.log(products[i]);
    }
}

// Apply 10% discount
console.log("After 10% Discount:");
for (let i = 0; i < products.length; i++) {
    products[i].price = products[i].price * 0.9;
    console.log(products[i].name + ": ₹" + products[i].price.toFixed(0));
}

// Print the final bill
let finalBill = 0;
for (let i = 0; i < products.length; i++) {
    finalBill += products[i].price;
}
console.log("Final Bill: ₹" + finalBill.toFixed(0));


// ============================
// Task 4 - Bank Account
// ============================
console.log("\n=== Task 4: Bank Account ===");

let account = {
    name: "Naveen",
    balance: 50000
};

// Deposit ₹10,000
account.balance += 10000;
console.log("After Deposit: ₹" + account.balance);

// Withdraw ₹5,000
account.balance -= 5000;
console.log("After Withdraw: ₹" + account.balance);

// Print current balance
console.log("Current Balance: ₹" + account.balance);

// Check balance is below ₹20,000
if (account.balance < 20000) {
    console.log("Balance is below ₹20,000");
} else {
    console.log("Balance is above ₹20,000");
}

// Print account details
console.log("Account Details:");
console.log("Name: " + account.name);
console.log("Balance: ₹" + account.balance);


// ============================
// Task 5 - Company Login
// ============================
console.log("\n=== Task 5: Company Login ===");
// Note: This will prompt when run
let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "Naveen" && password === "12345") {
    console.log("Welcome");
} else {
    console.log("Invalid Username or Password");
}


// ============================
// Task 6 - Traffic Signal
// ============================
console.log("\n=== Task 6: Traffic Signal ===");
// Note: This will prompt when run
let signal = prompt("Enter Signal Color (Red/Yellow/Green)").toLowerCase();

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


// ============================
// Task 7 - ATM Machine
// ============================
console.log("\n=== Task 7: ATM Machine ===");
// Note: This will prompt when run
let atmBalance = 50000;
let choice = prompt("ATM Menu\n1 Balance\n2 Deposit\n3 Withdraw\n4 Exit\nEnter choice:");

switch (choice) {
    case "1":
        console.log("Balance: ₹" + atmBalance);
        break;
    case "2":
        let depositAmt = parseInt(prompt("Enter deposit amount:"));
        atmBalance += depositAmt;
        console.log("Deposited. New Balance: ₹" + atmBalance);
        break;
    case "3":
        let withdrawAmt = parseInt(prompt("Enter withdraw amount:"));
        if (withdrawAmt <= atmBalance) {
            atmBalance -= withdrawAmt;
            console.log("Withdrawn. New Balance: ₹" + atmBalance);
        } else {
            console.log("Insufficient Balance");
        }
        break;
    case "4":
        console.log("Thank you for using ATM");
        break;
    default:
        console.log("Invalid Choice");
}


// ============================
// Task 8 - Cricket Score
// ============================
console.log("\n=== Task 8: Cricket Score ===");

let score = [10, 25, 40, 60, 80, 100];

// Highest score
let highScore = score[0];
for (let i = 1; i < score.length; i++) {
    if (score[i] > highScore) {
        highScore = score[i];
    }
}
console.log("Highest Score: " + highScore);

// Lowest score
let lowScore = score[0];
for (let i = 1; i < score.length; i++) {
    if (score[i] < lowScore) {
        lowScore = score[i];
    }
}
console.log("Lowest Score: " + lowScore);

// Total score
let totalScore = 0;
for (let i = 0; i < score.length; i++) {
    totalScore += score[i];
}
console.log("Total Score: " + totalScore);

// Average score
let average = totalScore / score.length;
console.log("Average Score: " + average);


// ============================
// Task 9 - Movie Ticket Booking
// ============================
console.log("\n=== Task 9: Movie Ticket Booking ===");
// Note: This will prompt when run
let age = parseInt(prompt("Enter your age:"));
let confirmBook = confirm("Do you want to book ticket?");

if (age >= 18 && confirmBook) {
    console.log("Allow Movie");
} else {
    console.log("Not Allowed");
}


// ============================
// Task 10 - Hospital Appointment
// ============================
console.log("\n=== Task 10: Hospital Appointment ===");
// Note: This will prompt when run
let token = prompt("Enter Token (1/2/3):");

switch (token) {
    case "1":
        console.log("Doctor A");
        break;
    case "2":
        console.log("Doctor B");
        break;
    case "3":
        console.log("Doctor C");
        break;
    default:
        console.log("Invalid Token");
}


// ============================
// Task 11 - Array Method Practice
// ============================
console.log("\n=== Task 11: Array Method Practice ===");

let fruits = ["Apple", "Orange", "Banana"];
console.log("Initial: " + fruits);

fruits.push("Mango");
console.log("After push: " + fruits);

fruits.pop();
console.log("After pop: " + fruits);

fruits.shift();
console.log("After shift: " + fruits);

fruits.unshift("Grapes");
console.log("After unshift: " + fruits);

fruits.splice(1, 1, "Pineapple");
console.log("After splice: " + fruits);

let sliced = fruits.slice(1, 3);
console.log("After slice: " + sliced);


// ============================
// Task 12 - Higher Order Methods
// ============================
console.log("\n=== Task 12: Higher Order Methods ===");

let empList = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

// map - increase salary
let increased = empList.map(function (emp) {
    return { name: emp.name, salary: emp.salary + 5000 };
});
console.log("After Map (Salary +5000):");
console.log(increased);

// filter
let filtered = empList.filter(function (emp) {
    return emp.salary > 30000;
});
console.log("After Filter (>30000):");
console.log(filtered);

// find
let found = empList.find(function (emp) {
    return emp.salary === 50000;
});
console.log("Found with 50000:");
console.log(found);

// reduce
let totalEmpSalary = empList.reduce(function (acc, emp) {
    return acc + emp.salary;
}, 0);
console.log("Total Salary using reduce: ₹" + totalEmpSalary);

// some
let hasHighEarner = empList.some(function (emp) {
    return emp.salary > 60000;
});
console.log("Any earns >60000: " + hasHighEarner);

// every
let allAbove = empList.every(function (emp) {
    return emp.salary > 15000;
});
console.log("All earn >15000: " + allAbove);


// ============================
// Task 13 - String Practice
// ============================
console.log("\n=== Task 13: String Practice ===");

let company = " Stackly IT ";

console.log("Uppercase: " + company.toUpperCase());
console.log("Lowercase: " + company.toLowerCase());
console.log("Trimmed: " + company.trim());
console.log("Replace IT: " + company.replace("IT", "Software"));
console.log("Includes Stackly: " + company.includes("Stackly"));
console.log("Split: ");
console.log(company.trim().split(" "));


// ============================
// Task 14 - Digital Clock
// ============================
console.log("\n=== Task 14: Digital Clock ===");

function showTime() {
    let date = new Date();
    console.log(date.toLocaleTimeString());
}

let clockInterval = setInterval(showTime, 1000);

setTimeout(function () {
    clearInterval(clockInterval);
    console.log("Clock stopped after 10 seconds");
}, 10000);


// ============================
// Task 15 - Fake Store API
// ============================
console.log("\n=== Task 15: Fake Store API ===");

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Product Titles:");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
        }

        console.log("\nProduct Prices:");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].price);
        }

        console.log("\nProducts > ₹100:");
        for (let i = 0; i < data.length; i++) {
            if (data[i].price > 100) {
                console.log(data[i].title);
            }
        }

        console.log("\nTotal Products: " + data.length);

        console.log("\nCategory Names:");
        let categories = [];
        for (let i = 0; i < data.length; i++) {
            if (categories.indexOf(data[i].category) === -1) {
                categories.push(data[i].category);
                console.log(data[i].category);
            }
        }
    })
    .catch(function (error) {
        console.log("Error fetching data: " + error);
    })
    .finally(function () {
        console.log("API Call Completed");
    });

// ============================
// Final Mini Project - Employee Payroll System
// ============================
console.log("\n=== Final Mini Project: Employee Payroll System ===");

let payrollEmployees = [
    { id: 101, name: "Naveen", salary: 30000, department: "IT" },
    { id: 102, name: "John", salary: 45000, department: "HR" },
    { id: 103, name: "Arun", salary: 60000, department: "Finance" }
];

function viewEmployees() {
    console.log("Employee List:");
    for (let i = 0; i < payrollEmployees.length; i++) {
        console.log(payrollEmployees[i]);
    }
}

function searchEmployee(id) {
    let foundEmp = payrollEmployees.find(function (emp) {
        return emp.id === id;
    });
    if (foundEmp) {
        console.log("Found Employee:", foundEmp);
    } else {
        console.log("Employee not found");
    }
}

function addBonus() {
    for (let i = 0; i < payrollEmployees.length; i++) {
        payrollEmployees[i].salary += 5000;
    }
    console.log("Bonus added to all employees");
}

function highestSalary() {
    let max = payrollEmployees[0];
    for (let i = 1; i < payrollEmployees.length; i++) {
        if (payrollEmployees[i].salary > max.salary) {
            max = payrollEmployees[i];
        }
    }
    console.log("Highest Salary:", max);
}

function lowestSalary() {
    let min = payrollEmployees[0];
    for (let i = 1; i < payrollEmployees.length; i++) {
        if (payrollEmployees[i].salary < min.salary) {
            min = payrollEmployees[i];
        }
    }
    console.log("Lowest Salary:", min);
}

function calculateTotalSalary() {
    let total = 0;
    for (let i = 0; i < payrollEmployees.length; i++) {
        total += payrollEmployees[i].salary;
    }
    console.log("Total Payroll: ₹" + total);
}

function filterAbove40000() {
    console.log("Employees above 40000:");
    for (let i = 0; i < payrollEmployees.length; i++) {
        if (payrollEmployees[i].salary > 40000) {
            console.log(payrollEmployees[i].name);
        }
    }
}

function printReport() {
    console.log("=== Employee Payroll Report ===");
    console.log("-------------------------------");
    for (let i = 0; i < payrollEmployees.length; i++) {
        console.log("ID: " + payrollEmployees[i].id + " | Name: " + payrollEmployees[i].name + " | Salary: ₹" + payrollEmployees[i].salary);
    }
    console.log("-------------------------------");
}

function showDateTime() {
    console.log("Current Date & Time: " + new Date().toLocaleString());
}

// Simple callback example
function applyCallback(callback) {
    console.log("Applying callback...");
    callback();
}

// Menu using prompt and switch
let continueMenu = true;

while (continueMenu) {
    let menuChoice = prompt("Employee Payroll System Menu\n1. View Employees\n2. Search Employee by ID\n3. Add Bonus\n4. Find Highest Salary\n5. Find Lowest Salary\n6. Calculate Total Salary\n7. Filter Salary Above ₹40,000\n8. Print Employee Report\n9. Show Current Date & Time\n10. Fetch Demo Data\n11. Exit\nEnter your choice:");

    switch (menuChoice) {
        case "1":
            viewEmployees();
            break;
        case "2":
            let searchId = parseInt(prompt("Enter Employee ID:"));
            searchEmployee(searchId);
            break;
        case "3":
            addBonus();
            break;
        case "4":
            highestSalary();
            break;
        case "5":
            lowestSalary();
            break;
        case "6":
            totalSalary();
            break;
        case "7":
            filterAbove40000();
            break;
        case "8":
            printReport();
            break;
        case "9":
            showDateTime();
            break;
        case "10":
            // Fetch demonstration
            console.log("Fetching demo employee data...");
            fetch("https://fakestoreapi.com/products")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log("Sample fetched data (first product title):");
                    console.log(data[0].title);
                })
                .catch(function (error) {
                    console.log("Fetch error: " + error);
                })
                .finally(function () {
                    console.log("API Call Completed");
                });
            break;
        case "11":
            continueMenu = false;
            console.log("Thank you for using Employee Payroll System");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }

    // Simple higher-order function usage in project
    if (menuChoice === "7") {
        applyCallback(function () {
            let highEarners = payrollEmployees.filter(function (emp) {
                return emp.salary > 40000;
            });
            console.log("Demo filter result - High earners count: " + highEarners.length);
        });
    }
}