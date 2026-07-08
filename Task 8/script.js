// =============================
// Fake Store API Project
// =============================

let apiLink = "https://fakestoreapi.com/products/";

let allProducts = [];

// Select HTML Elements
let api = document.querySelector(".api");
let count = document.querySelector("#count");

let search = document.querySelector("#search");
let category = document.querySelector("#category");
let price = document.querySelector("#price");
let selectedPrice = document.querySelector("#selectedPrice");
let special = document.querySelector("#special");

// Fetch API
fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        allProducts = products;

        displayProducts(allProducts);

    })
    .catch((error) => {

        api.innerHTML = `
        <div class="notfound">
            ❌ Unable to Load Products
            <br><br>
            Please Try Again Later.
        </div>
    `;

    });

// =============================
// Display Products Function
// =============================

function displayProducts(products) {

    api.innerHTML = "";

    count.innerText = "Total Products : " + products.length;

    if (products.length == 0) {

        api.innerHTML = `
            <div class="notfound">
                No Products Found
            </div>
        `;

        return;

    }

    products.forEach((product, index) => {

        let card = document.createElement("div");

        card.className = "card";

        let description = product.description;

        if (description.length > 100) {

            description = `
        <span class="shortDesc">
            ${product.description.slice(0, 100)}...
        </span>

        <span class="fullDesc" style="display:none;">
            ${product.description}
        </span>

        <span class="readMore">
            Read More...
        </span>
    `;

        }

        if (special.value == "nameonly") {

            card.innerHTML = `
        <h2>${product.title}</h2>
    `;

        }
        else {

            card.innerHTML = `

        <h3>
            Product ${index + 1}
        </h3>

        <h2>
            ${product.title}
        </h2>

        <img src="${product.image}">

        <p class="category">
            Category :
            ${product.category}
        </p>

        <p class="rating">
            Rating :
            ⭐ ${product.rating.rate}
        </p>

        <p class="description">
    ${description}
</p>

        <div class="price">
            $ ${product.price}
        </div>

        <button>
            Buy Now
        </button>

    `;

        }

        api.append(card);

    });

}

// =============================
// Search Function
// =============================

search.addEventListener("keyup", () => {

    let text = search.value.toLowerCase();

    let result = [];

    allProducts.forEach((product) => {

        if (product.title.toLowerCase().includes(text)) {

            result.push(product);

        }

    });

    displayProducts(result);

});

// =============================
// Category Filter
// =============================

category.addEventListener("change", () => {

    let value = category.value;

    if (value == "all") {

        displayProducts(allProducts);

        return;

    }

    let result = [];

    allProducts.forEach((product) => {

        if (product.category == value) {

            result.push(product);

        }

    });

    displayProducts(result);

});

// =============================
// Price Filter
// =============================

price.addEventListener("change", () => {

    let value = price.value;

    if (value == "all") {

        displayProducts(allProducts);

        return;

    }

    let result = [];

    allProducts.forEach((product) => {

        if (value == "below100") {

            if (product.price < 100) {

                result.push(product);

            }

        }

        if (value == "above100") {

            if (product.price > 100) {

                result.push(product);

            }

        }

    });

    displayProducts(result);

});

// =============================
// Special Filter
// =============================

special.addEventListener("change", () => {

    let value = special.value;

    if (value == "all" || value == "nameonly") {

        displayProducts(allProducts);
        return;

    }
    // =============================
    // First 5 Products
    // =============================

    if (value == "first5") {

        let result = [];

        for (let i = 0; i < 5; i++) {

            result.push(allProducts[i]);

        }

        displayProducts(result);
        return;

    }

    // =============================
    // Last 5 Products
    // =============================

    if (value == "last5") {

        let result = [];

        for (let i = allProducts.length - 5; i < allProducts.length; i++) {

            result.push(allProducts[i]);

        }

        displayProducts(result);
        return;

    }

    // =============================
    // Highest Rated Product
    // =============================

    if (value == "highest") {

        let highest = allProducts[0];

        allProducts.forEach((product) => {

            if (product.rating.rate > highest.rating.rate) {

                highest = product;

            }

        });

        displayProducts([highest]);
        return;

    }

    // =============================
    // Cheapest Product
    // =============================

    if (value == "cheapest") {

        let cheapest = allProducts[0];

        allProducts.forEach((product) => {

            if (product.price < cheapest.price) {

                cheapest = product;

            }

        });

        displayProducts([cheapest]);
        return;

    }

    // =============================
    // Costliest Product
    // =============================

    if (value == "costliest") {

        let costliest = allProducts[0];

        allProducts.forEach((product) => {

            if (product.price > costliest.price) {

                costliest = product;

            }

        });

        displayProducts([costliest]);
        return;

    }

});

// =============================
// Buy Button Event
// =============================

document.addEventListener("click", (event) => {

    // Buy Button
    if (event.target.tagName == "BUTTON") {

        if (event.target.innerText == "Buy Now") {

            alert("Product Added Successfully!");

        }

    }

    // Read More
    if (event.target.classList.contains("readMore")) {

        let card = event.target.closest(".card");

        let shortDesc = card.querySelector(".shortDesc");
        let fullDesc = card.querySelector(".fullDesc");

        if (event.target.innerText == "Read More...") {

            shortDesc.style.display = "none";
            fullDesc.style.display = "inline";

            event.target.innerText = "Show Less";

        }
        else {

            shortDesc.style.display = "inline";
            fullDesc.style.display = "none";

            event.target.innerText = "Read More...";

        }

    }

});

// =============================
// Console Information
// =============================

console.log("=================================");
console.log(" Fake Store API Project Loaded ");
console.log("=================================");

console.log("Completed Tasks");

console.log("✔ Task 1 - Product Count");
console.log("✔ Task 3 - Below $100");
console.log("✔ Task 4 - Above $100");
console.log("✔ Task 5 - Category");
console.log("✔ Task 6 - Rating");
console.log("✔ Task 7 - Search");
console.log("✔ Task 8 - Electronics");
console.log("✔ Task 9 - Men's Clothing");
console.log("✔ Task 10 - Women's Clothing");
console.log("✔ Task 11 - Jewellery");
console.log("✔ Task 12 - First 5");
console.log("✔ Task 13 - Last 5");
console.log("✔ Task 14 - Serial Number");
console.log("✔ Task 15 - Read More");
console.log("✔ Task 16 - Highest Rated");
console.log("✔ Task 17 - Cheapest");
console.log("✔ Task 18 - Costliest");
console.log("✔ Task 19 - Error Handling");
console.log("✔ Task 20 - Mini Project");

selectedPrice.addEventListener("keyup", () => {

    if (selectedPrice.value == "") {

        displayProducts(allProducts);

        return;

    }

    let limit = Number(selectedPrice.value);

    let result = [];

    allProducts.forEach((product) => {

        if (product.price < limit) {

            result.push(product);

        }

    });

    displayProducts(result);

});

