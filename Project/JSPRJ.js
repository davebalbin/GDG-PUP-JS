// app.js

// ========== DOM ELEMENTS ==========
// Grab the Start button element
let startButton = document.getElementById('startButton'); // using getElementById
let userChoiceDisplay = document.querySelector('#userChoice'); // using querySelector
let computerChoiceDisplay = document.getElementById('computerChoice'); // grab the computerChoice id
let resultDisplay = document.getElementById('result'); // grab the result id
let winsDisplay = document.getElementById('wins'); // grab the wins id
let lossesDisplay = document.getElementById('losses'); // grab the losses id
let tiesDisplay = document.getElementById('ties'); // grab the ties id

// ========== GAME STATE VARIABLES ==========
// Track the state of the game
let userChoice = ''; // Store the user's choice

// Track the score: wins, losses, and ties initialized to 0
let wins = 0;
let losses = 0; // initialize losses to 0
let ties = 0; // initialize ties to 0

// Available choices for the game
const choices = ['rock', 'paper', 'scissors'];

// ========== EVENT LISTENERS ==========
document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
document.getElementById('paper').addEventListener('click', () => selectChoice('paper')); // add an event listener to paper button
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors')); // add an event listener to scissors button
document.getElementById('startButton').addEventListener('click', playGame); // add an event listener to the startButton
document.getElementById('resetButton').addEventListener('click', resetGame); // add an event listener to the resetButton

// ========== FUNCTIONS ==========
function selectChoice(choice) {
    userChoice = choice;
    userChoiceDisplay.innerHTML = `<img src="icon-${choice}.png" alt="${choice}" class='choice--img'/>`;
    startButton.disabled = false;
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length); // generate a random index
    return choices[randomIndex]; // return the choice at the random index
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw'; // It's a tie
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win'; // User wins
    } else {
        return 'lose'; // User loses
    }
}

function updateScore(result) {
    if (result === 'win') {
        wins++; // increment wins by 1
        winsDisplay.textContent = wins; // update the winsDisplay with the new value
    } else if (result === 'lose') {
        losses++; // increment losses by 1
        lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
    } else {
        ties++; // increment ties by 1
        tiesDisplay.textContent = ties; // update the tiesDisplay with the new value
    }
}

function playGame() {
    const computerChoice = getComputerChoice(); // Step 1: Get the computer's choice
    const result = determineWinner(userChoice, computerChoice); // Step 2: Compare the user's choice and the computer's choice

    computerChoiceDisplay.innerHTML = `<img src="icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`; // Step 3: Update the computer's choice display

    if (result === 'draw') {
        resultDisplay.textContent = 'It\'s a Draw!'; // Display draw message
    } else if (result === 'win') {
        resultDisplay.textContent = 'You Win!'; // Display win message
    } else {
        resultDisplay.textContent = 'You Lose!'; // Display lose message
    }

    updateScore(result); // Step 5: Update the score
}

function resetGame() {
    userChoice = '';
    userChoiceDisplay.innerHTML = '<img src="icon-user.png" alt="user" class="choice--img">'; // Reset user choice display
    computerChoiceDisplay.innerHTML = '<img src="icon-computer.png" alt="computer" class="choice--img">'; // Reset computer choice display
    resultDisplay.textContent = 'Choose your weapon!'; // Reset result display
    wins = 0; // Reset wins
    losses = 0; // Reset losses
    ties = 0; // Reset ties
    winsDisplay.textContent = wins; // Update wins display
    lossesDisplay.textContent = losses; // Update losses display
    tiesDisplay.textContent = ties; // Update ties display
    startButton.disabled = true; // Disable the Start button
}