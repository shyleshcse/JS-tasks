// =====================================
// Task 1: Employee Registration
// =====================================

let employeeName = "Shyleshkanna B";
const employeeId = "STK-26-3175";
let department = "Development";
let salary = 42000;
let isPermanent = true;

console.log("==============================");
console.log("      EMPLOYEE DETAILS");
console.log("==============================");
console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeId}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ₹${salary}`);
console.log(`Permanent  : ${isPermanent}`);


// =====================================s
// Task 2: Employee Skills
// =====================================

let skills = ["HTML", "CSS", "JavaScript", "Java", "Git", "Node.js"];

console.log("\nEmployee Skills");
console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);


// =====================================
// Task 3: Company Object
// =====================================

let company = {
    companyName: "Stackly IT",
    location: "Coimbatore",
    employees: 300,
    technologies: ["HTML", "CSS", "JavaScript", "Java", "Node.js"]
};

console.log("\nCompany Details");
console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);


// =====================================
// Task 4: Salary Calculator
// =====================================

let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\nSalary Calculation");
console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


// =====================================
// Task 5: Attendance Checker
// =====================================

let attendance = 95;

attendance >= 75
    ? console.log("Eligible for Exam")
    : console.log("Not Eligible");


// =====================================
// Task 6: Login Verification
// =====================================

let username = "admin";
let password = "12345";

username === "admin" && password === "12345"
    ? console.log("Login Successful")
    : console.log("Invalid Credentials");


// =====================================
// Task 7: Product Billing
// =====================================

let productName = "Laptop";
let productPrice = 50000;
let quantity = 3;

let bill = productPrice * quantity;

console.log("\nProduct Billing");
console.log(`Product : ${productName}`);
console.log(`Price : ₹${productPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total : ₹${bill}`);


// =====================================
// Task 8: Increment & Decrement
// =====================================

let visitors = 150;

console.log("\nIncrement & Decrement");

console.log("Pre Increment :", ++visitors);   
console.log("Post Increment :", visitors++); 
console.log("Current Value :", visitors);    

console.log("Pre Decrement :", --visitors);  
console.log("Post Decrement :", visitors--); 
console.log("Current Value :", visitors);    


// =====================================
// Task 9: Comparison Checker
// =====================================

console.log(10 == "10");     // true
console.log(10 === "10");    // false
console.log(20 != "20");     // false
console.log(20 !== "20");    // true
console.log(5 < 10);         // true
console.log(15 >= 20);       // false
console.log(100 <= 100);     // true


// =====================================
// Task 10: User Interaction
// =====================================

let empName = prompt("Enter Employee Name");
let empAge = prompt("Enter Employee Age");

let join = confirm("Do you want to join our company?");

join
    ? alert(`Welcome ${empName}`)
    : alert("Thank You");


// =====================================
// Final Challenge - Employee Portal
// =====================================

let experience = 3;
let empBonus = 5000;
let empSalary = 42000;
let finalPay = empSalary + empBonus;

console.log("\n==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");
console.log(`Employee Name : ${employeeName}`);
console.log(`Employee ID   : ${employeeId}`);
console.log(`Department    : ${department}`);
console.log(`Experience    : ${experience} Years`);
console.log(`Salary        : ₹${empSalary}`);
console.log(`Bonus         : ₹${empBonus}`);
console.log(`Final Salary  : ₹${finalPay}`);
console.log(`Skills        : ${skills.join(", ")}`);
console.log(`Attendance    : ${attendance}%`);
console.log(`Exam Status   : ${attendance >= 75 ? "Eligible" : "Not Eligible"}`);
console.log(`Login Status  : ${username === "admin" && password === "12345" ? "Success" : "Failed"}`);
console.log(`Company       : ${company.companyName}`);
console.log(`Location      : ${company.location}`);
console.log("==============================");


// =====================================
// Bonus Task - Movie Ticket Booking
// =====================================

let movieName = "Leo";
let ticketPrice = 200;
let ticketCount = 3;

let totalAmount = ticketPrice * ticketCount;

console.log("\nMovie Ticket Booking");
console.log(`Movie : ${movieName}`);
console.log(`Ticket Price : ₹${ticketPrice}`);
console.log(`Tickets : ${ticketCount}`);
console.log(`Total Amount : ₹${totalAmount}`);

let booking = confirm("Confirm Movie Booking?");

booking
    ? alert("Booking Confirmed")
    : alert("Booking Cancelled");