// ========================================
// TASK 1: Employee Management System
// ========================================

console.log("========== TASK 1 ==========");

let employees = [
    {
        name: "Shylesh",
        id: 101,
        salary: 30000
    },
    {
        name: "Dany",
        id: 102,
        salary: 55000
    }
];

for (let emp of employees) {
    console.log("Name:", emp.name);
    console.log("ID:", emp.id);
    console.log("Salary:", emp.salary);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("--------------------");
}


// ========================================
// TASK 2: Student Result Portal
// ========================================

console.log("========== TASK 2 ==========");

let tamil = 95;
let english = 88;
let maths = 91;

let total = tamil + english + maths;
let percentage = total / 3;

console.log("Total:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


// ========================================
// TASK 3: E-Commerce Cart
// ========================================

console.log("========== TASK 3 ==========");

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill(items) {
    let totalBill = 0;

    for (let item of items) {
        totalBill += item.price;
    }

    console.log("Total Bill:", totalBill);

    if (totalBill > 5000) {
        let discount = totalBill * 0.10;
        console.log("Discount:", discount);
        console.log("Final Amount:", totalBill - discount);
    } else {
        console.log("No Discount");
    }
}

calculateBill(products);


// ========================================
// TASK 4: Login Authentication
// ========================================

console.log("========== TASK 4 ==========");

let username = "admin";
let password = "12345";

(username === "admin" && password === "12345")
    ? console.log("Login Success")
    : console.log("Invalid Credentials");


// ========================================
// TASK 5: Traffic Signal System
// ========================================

console.log("========== TASK 5 ==========");

let signal = "Red";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// ========================================
// TASK 6: ATM Withdrawal System
// ========================================

console.log("========== TASK 6 ==========");

let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance - withdraw);
} else {
    console.log("Insufficient Balance");
}


// ========================================
// TASK 7: Online Food Order (Callback)
// ========================================

console.log("========== TASK 7 ==========");

function foodDelivered() {
    console.log("Food Delivered");
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function placeOrder(callback) {
    console.log("Order Received");
    prepareFood(callback);
}

placeOrder(foodDelivered);


// ========================================
// TASK 8: Cashback Generator
// ========================================

console.log("========== TASK 8 ==========");

function* cashback() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashback();

for (let value of offer) {
    console.log(value);
}


// ========================================
// TASK 9: Hospital Patient Check
// ========================================

console.log("========== TASK 9 ==========");

let age = 25;
let weight = 65;

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}


// ========================================
// TASK 10: Mini Employee Portal
// ========================================

console.log("========== TASK 10 ==========");

let employeeList = [
    {
        id: 1,
        name: "Kamal",
        salary: 40000
    },
    {
        id: 2,
        name: "Rahul",
        salary: 70000
    }
];

// View Employees
function viewEmployees() {
    console.log("Employee List");

    for (let emp of employeeList) {
        console.log(emp);
    }
}

// Add Employee
function addEmployee(id, name, salary) {
    employeeList.push({
        id: id,
        name: name,
        salary: salary
    });

    console.log("Employee Added");
}

// Search Employee
function searchEmployee(id) {
    for (let emp of employeeList) {
        if (emp.id === id) {
            console.log("Employee Found:", emp);
        }
    }
}

// Calculate Bonus
function calculateBonus() {
    for (let emp of employeeList) {
        if (emp.salary >= 50000) {
            console.log(emp.name + " Eligible For Bonus");
        } else {
            console.log(emp.name + " Not Eligible For Bonus");
        }
    }
}

// Delete Employee
function deleteEmployee(id) {
    employeeList = employeeList.filter(emp => emp.id !== id);
    console.log("Employee Deleted");
}

// Total Employees
function totalEmployees() {
    console.log("Total Employees:", employeeList.length);
}

// Function Calls
viewEmployees();
addEmployee(3, "John", 55000);
searchEmployee(2);
calculateBonus();
deleteEmployee(1);
totalEmployees();
viewEmployees();
