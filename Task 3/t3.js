// JavaScript Today's Tasks

// Task 1: Employee Information System

let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");
let empDept = prompt("Enter Employee Department:");
let empSalary = Number(prompt("Enter Employee Salary:"));

let employee = {
    name: empName,
    age: empAge,
    department: empDept,
    salary: empSalary
};

console.log(employee);

if (empSalary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible for Bonus");
}


// Task 2: Supermarket Billing


let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;

if (totalBill > 5000) {
    totalBill = totalBill - (totalBill * 10 / 100);
}

console.log("Product:", productName);
console.log("Final Amount:", totalBill);


// Task 3: Student Result Portal


let studentName = prompt("Enter Student Name:");
let marks = Number(prompt("Enter Marks:"));

console.log("Student:", studentName);

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task 4: Bank ATM Eligibility


let userName = prompt("Enter User Name:");
let balance = Number(prompt("Enter Account Balance:"));
let withdraw = Number(prompt("Enter Withdrawal Amount:"));

if (withdraw <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}


// Task 5: Login Validation

let username = "admin";
let password = "12345";

let inputUser = prompt("Enter Username:");
let inputPass = prompt("Enter Password:");

if (inputUser === username && inputPass === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// Task 6: Online Food Order


let foods = [
    "Pizza",
    "Burger",
    "Biryani",
    "Dosa",
    "Idli",
    "Noodles",
    "Pasta",
    "Sandwich"
];

console.log("First Item:", foods[0]);
console.log("Last Item:", foods[foods.length - 1]);
console.log("Total Items:", foods.length);

for (let item of foods) {
    console.log(item);
}

// Task 7: Company Employee Directory

let employeeData = {
    name: "Shyleshkanna B",
    age: 22,
    department: "Development",
    salary: 32000,
    experience: "1 Year"
};

for (let key in employeeData) {
    console.log(key, employeeData[key]);
}


// Task 8: Traffic Signal System

let signal = prompt("Enter Signal Color:");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Task 9: Age Category Checker


let age = Number(prompt("Enter Your Age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// Task 10: Employee Attendance (Ternary Operator)


let emp = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log("Welcome", emp);

attendance.toLowerCase() === "present"
    ? console.log("Attendance: Present")
    : console.log("Attendance: Absent");
    