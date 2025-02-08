// Create Global Variables
let globalVar = "I am a global variable"; // Assign a string value
let anotherGlobalVar = 42; // Assign a number value

// Create a Function
function demoFunctionScope() {
    // Create a local variable
    let localVar = "I am a local variable"; // Assign a string value

    // Log both the global variable and the local variable
    console.log(globalVar); // Logs: "I am a global variable"
    console.log(localVar); // Logs: "I am a local variable"

    // Return a string that includes both variables
    return `Global: ${globalVar}, Local: ${localVar}`;
}

// Block Scope Demonstration
if (true) {
    let blockVar = "I am a block-scoped variable"; // Declare a block-scoped variable
    console.log(blockVar); // Logs: "I am a block-scoped variable"
}

// Try logging blockVar outside the block
try {
    console.log(blockVar); // This will throw a ReferenceError
} catch (error) {
    console.log("Error:", error.message); // Logs: "Error: blockVar is not defined"
}

// Test Your Code
const returnValue = demoFunctionScope(); // Call the function and store the return value
console.log(returnValue); // Logs: "Global: I am a global variable, Local: I am a local variable"