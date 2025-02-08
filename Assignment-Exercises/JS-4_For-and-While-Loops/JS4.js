// Task 1: For Loop to print numbers from 1 to 10
console.log("Task 1: Printing numbers from 1 to 10");
for (let i = 1; i <= 10; i++) { // Use 'i' as the loop counter
    console.log(`Number: ${i}`); // Use backticks for template literals
}

// Task 2: While Loop to print 10 items of choice
console.log("\nTask 2: Printing 10 hobbies");
const hobbies = [
    "Reading",
    "Traveling",
    "Cooking",
    "Gaming",
    "Hiking",
    "Photography",
    "Music",
    "Drawing",
    "Swimming",
    "Writing"
];

let index = 0; // Initialize index for the while loop
while (index < hobbies.length) {
    console.log(`Hobby ${index + 1}: ${hobbies[index]}`); // Print each hobby with its index
    index++; // Increment the index
}