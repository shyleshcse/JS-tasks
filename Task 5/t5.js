// ------------------------------------------
// 1. Employee Salary
// ------------------------------------------
function yearlySalary(monthSalary) {
    return monthSalary * 12;
}

console.log("1. Yearly Salary : ₹" + yearlySalary(45000));


// ------------------------------------------
// 2. Student Pass or Fail
// ------------------------------------------
function checkResult(mark) {
    if (mark >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log("\n2. Student Result : " + checkResult(72));


// ------------------------------------------
// 3. Food Bill
// ------------------------------------------
function foodBill(price, quantity) {
    return price * quantity;
}

console.log("\n3. Total Food Bill : ₹" + foodBill(180, 3));


// ------------------------------------------
// 4. Welcome Employee
// ------------------------------------------
function welcomeEmployee(name, department) {
    console.log("\n4. Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("Naveen", "Development");


// ------------------------------------------
// 5. Shopping Discount
// ------------------------------------------
function finalAmount(price, discount) {
    return price - discount;
}

console.log("\n5. Final Amount : ₹" + finalAmount(5000, 500));


// ------------------------------------------
// 6. Company Login (Callback)
// ------------------------------------------
function login(callback) {
    console.log("\n6. Login Successful");
    callback();
}

function dashboard() {
    console.log("Loading Dashboard...");
}

login(dashboard);


// ------------------------------------------
// 7. Food Delivery (Higher Order Function)
// ------------------------------------------
function deliveryProcess(stepFunction) {
    stepFunction();
}

function foodSteps() {
    console.log("\n7. Order Received");
    console.log("Preparing Food");
    console.log("Out for Delivery");
    console.log("Delivered");
}

deliveryProcess(foodSteps);


// ------------------------------------------
// 8. Lucky Draw (Generator)
// ------------------------------------------
function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

console.log("\n8. Lucky Draw");

let coupon = luckyDraw();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// ------------------------------------------
// 9. Employee Bonus (Closure)
// ------------------------------------------
function bonus(salary) {
    return function(extraBonus) {
        console.log("\n9. Total Salary : ₹" + (salary + extraBonus));
    };
}

bonus(50000)(5000);


// ------------------------------------------
// 10. Merge Employee Details (Spread)
// ------------------------------------------
let employeePersonal = {
    name: "Naveen",
    age: 22
};

let employeeOffice = {
    id: 101,
    department: "Development"
};

let employee = {
    ...employeePersonal,
    ...employeeOffice
};

console.log("\n10. Employee Details");
console.log(employee);


// ------------------------------------------
// 11. Shopping Cart (Spread)
// ------------------------------------------
let cart1 = ["Mobile", "Laptop"];
let cart2 = ["Headphone", "Mouse"];

let totalCart = [...cart1, ...cart2];

console.log("\n11. Shopping Cart");
console.log(totalCart);


// ------------------------------------------
// 12. Student Marks (Rest)
// ------------------------------------------
function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log("\n12. Student : " + name);
    console.log("Total Marks : " + total);
    console.log("Average : " + average);
}

student("Naveen", 90, 85, 88, 95);


// ------------------------------------------
// 13. Product Details (Object Destructuring)
// ------------------------------------------
let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price } = product;

console.log("\n13. Product Details");
console.log("Name : " + name);
console.log("Price : ₹" + price);


// ------------------------------------------
// 14. Customer Details (Array Destructuring)
// ------------------------------------------
let customer = [101, "Naveen", "Chennai", 9876543210];

let [id, customerName, city] = customer;

console.log("\n14. Customer Details");
console.log("ID : " + id);
console.log("Name : " + customerName);
console.log("City : " + city);


// ------------------------------------------
// 15. Add Product (push)
// ------------------------------------------
let cart = ["Mobile", "Laptop"];

cart.push("Headphone");

console.log("\n15. Cart");
console.log(cart);


// ------------------------------------------
// 16. Remove Last Product (pop)
// ------------------------------------------
cart.pop();

console.log("\n16. Cart After Removing Last Product");
console.log(cart);


// ------------------------------------------
// 17. Replace Employee (splice)
// ------------------------------------------
let employees = ["Rahul", "Arun", "John", "David"];

employees.splice(2, 1, "Naveen");

console.log("\n17. Employees");
console.log(employees);


// ------------------------------------------
// 18. Search Product (includes)
// ------------------------------------------
let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

console.log("\n18. Laptop Available : " + products.includes("Laptop"));


// ------------------------------------------
// 19. Employee Ranking (sort)
// ------------------------------------------
let salaries = [25000, 45000, 30000, 70000];

salaries.sort(function(a, b) {
    return a - b;
});

console.log("\n19. Salaries");
console.log(salaries);


// ------------------------------------------
// 20. Reverse Chat Messages
// ------------------------------------------
let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log("\n20. Latest Messages");
console.log(messages);


// ==========================================
// Bonus Task
// Employee Management System
// ==========================================

let employeeList = [
    {
        id: 101,
        name: "Naveen",
        salary: 30000
    },
    {
        id: 102,
        name: "Rahul",
        salary: 50000
    },
    {
        id: 103,
        name: "John",
        salary: 40000
    }
];

console.log("\n========== BONUS TASK ==========");

// View Employees
console.log("\nAll Employees");
console.log(employeeList);

// Add Employee
employeeList.push({
    id: 104,
    name: "David",
    salary: 35000
});

console.log("\nAfter Adding Employee");
console.log(employeeList);

// Search Employee by ID
console.log("\nSearch Employee by ID");

for (let emp of employeeList) {
    if (emp.id === 102) {
        console.log(emp);
    }
}

// Salary + Bonus
console.log("\nSalary + Bonus");

for (let emp of employeeList) {
    console.log(emp.name + " : ₹" + (emp.salary + 5000));
}

// Remove Employee
employeeList.splice(1, 1);

console.log("\nAfter Removing Employee");
console.log(employeeList);

// Sort by Salary
employeeList.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("\nSorted by Salary");
console.log(employeeList);

// Find Employee by Name
console.log("\nFind Employee by Name");

for (let emp of employeeList) {
    if (emp.name === "John") {
        console.log(emp);
    }
}

// Destructuring
console.log("\nEmployee Details using Destructuring");

let { id: empId, name: empName, salary: empSalary } = employeeList[0];

console.log("ID :", empId);
console.log("Name :", empName);
console.log("Salary :", empSalary);