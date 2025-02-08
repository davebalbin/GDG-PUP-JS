// Step 1: Create a car object
const car = {
    make: "Toyota",      // Car brand
    model: "Sienna",    // Car model
    year: 2025           // Car year
};

// Step 2: Create a function to describe the car
function getDescription(carObject) {
    // Combine the car's properties into a descriptive sentence
    return `This car is a ${carObject.year} ${carObject.make} ${carObject.model}.`;
}

// Step 3: Call the function and display the result
const description = getDescription(car); // Call the function with the car object
console.log(description); // Display the output