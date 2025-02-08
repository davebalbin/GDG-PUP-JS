// Function to check the user's age and categorize it
function checkAge() {
    // Retrieve the user's age input from the input field
    const ageInput = document.getElementById('ageInput').value;
    
    // Convert the input value to a number
    const age = Number(ageInput);
    
    // Initialize a variable to hold the category
    let category;

    // Check if the input is a valid number
    if (isNaN(age) || age < 0) {
        // If the age is not a number or is negative, set category to invalid
        category = "Invalid age. Please enter a valid number.";
    } else if (age >= 0 && age <= 12) {
        // If the age is between 0 and 12, set category to Child
        category = "Child";
    } else if (age >= 13 && age <= 19) {
        // If the age is between 13 and 19, set category to Teenager
        category = "Teenager";
    } else {
        // If the age is 20 or greater, set category to Adult
        category = "Adult";
    }

    // Display the result in the paragraph with id 'result'
    const resultElement = document.getElementById('result');
    resultElement.textContent = category;

    // Optionally, add a class to style the result based on the category
    if (category === "Invalid age. Please enter a valid number.") {
        resultElement.classList.add('error');
    } else {
        resultElement.classList.remove('error');
    }
}