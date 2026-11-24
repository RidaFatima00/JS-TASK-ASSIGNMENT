
// ==========================================
// 1. ARRAY DESTRUCTURING
// ==========================================


// Task 1: E-Commerce Product Details

const product = ["Nike Shoes", 4500, "Black", "Available"];

const [productName, price, color, availability] = product;

console.log("Task 1: E-Commerce Product Details");
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("Color:", color);
console.log("Availability:", availability);


// Task 2: Restaurant Order Management

const order = ["Rida", "Pizza", 2, 1500, "Cash"];

const [customerName, foodItem, ...orderDetails] = order;

const [quantity, orderPrice, paymentMethod] = orderDetails;

console.log("\nTask 2: Restaurant Order Management");
console.log("Customer Name:", customerName);
console.log("Food Item:", foodItem);
console.log("Quantity:", quantity);
console.log("Price:", orderPrice);
console.log("Payment Method:", paymentMethod);


// Task 3: Weather Application

const weather = ["Karachi", 32, "Sunny", 65];

let [city, temperature, condition, humidity] = weather;

console.log("\nTask 3: Weather Application");
console.log("City:", city);
console.log("Temperature:", temperature);
console.log("Condition:", condition);
console.log("Humidity:", humidity);

// Swapping temperature and humidity without third variable

[temperature, humidity] = [humidity, temperature];

console.log("After Swapping:");
console.log("Temperature:", temperature);
console.log("Humidity:", humidity);

// Default value for missing temperature

const anotherWeather = ["Lahore"];

const [cityName, cityTemperature = "Not Available"] = anotherWeather;

console.log("Another City:", cityName);
console.log("Temperature:", cityTemperature);



// ==========================================
// 2. OBJECT DESTRUCTURING
// ==========================================


// Task 1: User Profile Page

const user = {
    name: "RIDA FATIMA",
    email: "rida@example.com",
    age: 18,
    city: "Karachi",
    profession: "Frontend Developer"
};

const {
    name,
    email,
    profession: jobTitle
} = user;

console.log("\nTask 4: User Profile Page");
console.log("Name:", name);
console.log("Email:", email);
console.log("Job Title:", jobTitle);


// Task 2: Online Shopping Checkout

const customer = {
    name: "RIDA",
    address: {
        city: "Karachi",
        area: "Gulshan",
        postalCode: 75300
    },
    payment: {
        method: "Cash on Delivery",
        status: "Pending"
    }
};

const {
    name: customerName2,
    address: { city: customerCity, area },
    payment: { method, status }
} = customer;

console.log("\nTask 5: Online Shopping Checkout");
console.log("Customer Name:", customerName2);
console.log("City:", customerCity);
console.log("Area:", area);
console.log("Payment Method:", method);
console.log("Payment Status:", status);


// Task 3: Employee Dashboard

const employee = {
    employeeName: "Sara",
    designation: "UI Designer",
    salary: 80000
};

const {
    employeeName: name2,
    designation: jobTitle2,
    salary,
    department = "Not Assigned"
} = employee;

console.log("\nTask 6: Employee Dashboard");
console.log("Employee Name:", name2);
console.log("Job Title:", jobTitle2);
console.log("Salary:", salary);
console.log("Department:", department);



// ==========================================
// 3. CALLBACK FUNCTIONS
// ==========================================


// Task 1: Food Delivery Application

function placeOrder(foodName, callback) {

    const message = `Your ${foodName} order has been placed successfully!`;

    callback(message);
}

console.log("\nTask 7: Food Delivery Application");

placeOrder("Pizza", function(message) {
    console.log(message);
});


// Task 2: Payment Processing System

function processPayment(amount, callback) {

    if (amount > 0) {
        callback("Payment Successful! Amount: " + amount);
    } 
    else {
        callback("Payment Failed! Invalid Amount.");
    }

}

console.log("\nTask 8: Payment Processing System");

processPayment(5000, function(result) {
    console.log(result);
});


// Task 3: Student Result Management System

function calculateResult(studentName, marks, callback) {

    if (marks >= 50) {
        callback(`${studentName} has Passed with ${marks} marks.`);
    } 
    else {
        callback(`${studentName} has Failed with ${marks} marks.`);
    }

}

console.log("\nTask 9: Student Result Management System");

calculateResult("RIDA ", 80, function(result) {
    console.log(result);
});



// ==========================================
// 4. HIGHER-ORDER FUNCTIONS
// ==========================================


// Task 1: E-Commerce Discount System

const prices = [1000, 2500, 4000, 5000, 8000];

const discountedPrices = prices.map(function(price) {
    return price - (price * 10 / 100);
});

console.log("\nTask 10: E-Commerce Discount System");
console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);


// Task 2: Job Portal - Filter Eligible Candidates

const candidates = [
    { name: "Rida", experience: 1 },
    { name: "Sara", experience: 3 },
    { name: "Laiba", experience: 5 },
    { name: "Zara", experience: 2 },
    { name: "Soniya", experience: 4 }
];

const eligibleCandidates = candidates.filter(function(candidate) {
    return candidate.experience >= 3;
});

console.log("\nTask 11: Job Portal");
console.log("Shortlisted Candidates:", eligibleCandidates);
console.log("Total Shortlisted Candidates:", eligibleCandidates.length);


// Task 3: Shopping Cart Total Calculator

const cart = [
    { product: "Shoes", price: 3000, quantity: 2 },
    { product: "Shirt", price: 1500, quantity: 3 },
    { product: "Watch", price: 5000, quantity: 1 }
];

// Calculate each product subtotal using map()

const productSubtotals = cart.map(function(item) {
    return {
        product: item.product,
        subtotal: item.price * item.quantity
    };
});

// Calculate final cart bill using reduce()

const finalTotal = productSubtotals.reduce(function(total, item) {
    return total + item.subtotal;
}, 0);

console.log("\nTask 12: Shopping Cart Total Calculator");
console.log("Product Subtotals:", productSubtotals);
console.log("Final Cart Total:", finalTotal);
