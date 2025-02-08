// Select the button using its ID
const colorButton = document.getElementById('colorButton');

// Function to generate a random hex color
function getRandomColor() {
    // Generate a random number between 0 and 16777215 (which is 0xFFFFFF)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Return the color formatted as a hex string
    return `#${randomColor.padStart(6, '0')}`; // Ensure it is 6 characters long
}

// Add an event listener to the button for the click event
colorButton.addEventListener('click', function() {
    // Generate a random color
    const newColor = getRandomColor();
    // Apply the generated color to the document's body background
    document.body.style.backgroundColor = newColor;
});