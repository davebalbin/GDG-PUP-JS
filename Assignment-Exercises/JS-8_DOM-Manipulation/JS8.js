// Step 1: Initialize the counter value
let counterVal = 0;

// Step 2: Select the counter text and buttons using querySelector
const counterText = document.querySelector("#counter-text");
const buttonAdd = document.querySelector("#button-add");
const buttonSubtract = document.querySelector("#button-subtract");

// Step 3: Attach event listeners to the buttons
buttonAdd.addEventListener("click", function() {
    // Increment the counter value
    counterVal++;
    // Update the displayed counter value
    counterText.textContent = counterVal;
});

buttonSubtract.addEventListener("click", function() {
    // Decrement the counter value only if it's greater than 0
    if (counterVal > 0) {
        counterVal--;
    }
    // Update the displayed counter value
    counterText.textContent = counterVal;
});