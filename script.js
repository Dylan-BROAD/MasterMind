const main_display = document.querySelector(".content");

const submit_button = document.getElementById("submit");
const reset_button = document.getElementById("reset");
const clear_button = document.getElementById("clear");

const green_button = document.getElementById("green");
const blue_button = document.getElementById("blue");
const red_button = document.getElementById("red");
const purple_button = document.getElementById("purple");
const yellow_button = document.getElementById("yellow");
const orange_button = document.getElementById("orange");

let codeLength = 4;
let tries = 10;
let colors = ["green", "blue", "red", "purple", "yellow", "orange"];

let random_code = [];
let attempt = 1;

// Initialize board
init();

// Function to initialize the game board
function init() {
  // Reset random_code and attempt
  random_code = [];
  attempt = 1;

  // Clear gameBoard and colorChoice
  main_display.innerHTML = "";

  // Random code generator
  for (let i = 0; i < codeLength; i++) {
    random_code.push(colors[Math.floor(Math.random() * colors.length)]);
    console.log(random_code);
  }

  // Display the random code in the computer guess section

  // Display board
  for (let i = 1; i <= tries; i++) {
    let div_attempt = document.createElement("div");
    div_attempt.setAttribute("id", "attempt-" + i);
    div_attempt.setAttribute("class", "attempt");
    let div_hintColumn = document.createElement("div");
    div_hintColumn.setAttribute("class", "hintColumn");
    let div_guessColumn = document.createElement("div");
    div_guessColumn.setAttribute("class", "guessColumn");

    // Create guess circles
    for (let j = 1; j <= codeLength; j++) {
      let div_tr = document.createElement("div");
      let div_gr = document.createElement("div");
      div_gr.classList.add("guess");
      div_guessColumn.append(div_gr);
    }

    // Create hint circles
    for (let j = 1; j <= codeLength; j++) {
      let div_hr = document.createElement("div");
      div_hr.classList.add("hint");
      div_hintColumn.append(div_hr);
    }

    // Append both rows to the attempt div
    div_attempt.append(div_hintColumn);
    div_attempt.append(div_guessColumn);

    // Prepend the attempt div to content_display
    main_display.append(div_attempt);
  }
}

function renderSecretCode() {
  let computerGuessDiv = document.querySelector(".computerGuess");
  computerGuessDiv.innerHTML = "";
  for (let i = 0; i < codeLength; i++) {
    let codeCircle = document.createElement("div");
    codeCircle.classList.add("colorCircle");
    codeCircle.style.backgroundColor = random_code[i];
    computerGuessDiv.appendChild(codeCircle);
  }
}

// Function to handle color selection by the user
function playersColorChoice(color) {
  // Find the next empty guess circle in the current attempt
  let guessDivs = document.querySelectorAll(
    ".attempt:nth-child(" + attempt + ") .guess"
  );

  for (let i = 0; i < guessDivs.length; i++) {
    if (!guessDivs[i].style.backgroundColor) {
      guessDivs[i].style.backgroundColor = color; // Set the background color of the empty guess circle
      break; // Exit the loop after setting the color
    }
  }
}

// Function to check if the current guess is correct
function checkWin(guess) {
  // Iterate through each position in the guess and compare with the corresponding position in the random code
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== random_code[i]) {
      return false; // If any position doesn't match, return false
    }
  }
  return true; // If all positions match, return true
}

// Function to handle click on the Clear button
function clearChoices() {
  let guessDivs = document.querySelectorAll(
    ".attempt:nth-child(" + attempt + ") .guess"
  );

  // Reset the background color of all guess circles
  guessDivs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}

function resetGame() {
  // Reload the page to fully restart the game
  location.reload();
}

// Event listener for the Reset button
reset_button.addEventListener("click", resetGame);

// Event listener for the Clear button
clear_button.addEventListener("click", clearChoices);

// Function to display the computer guess
function displayComputerGuess() {
  let computerGuessDiv = document.querySelector(".computerGuess");
  computerGuessDiv.innerHTML = "Computer code: " + random_code.join(", ");
}

// Function to handle submission of user's guess
function submitGuess() {
  let guessDivs = document.querySelectorAll(
    ".attempt:nth-child(" + attempt + ") .guess"
  );
  let guess = [];
  guessDivs.forEach((div) => {
    let color = div.style.backgroundColor;
    guess.push(color || "");
  });

  let hints = generateHints(guess); // Generate hints based on the guess

  function generateHints(guess) {
    let hints = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === random_code[i]) {
        hints.push("black"); // Correct color and position
      } else if (random_code.includes(guess[i])) {
        hints.push("white"); // Correct color but wrong position
      } else {
        hints.push(""); // Incorrect color
      }
    }
    return hints;
  }

  // Display hints
  let hintDivs = document.querySelectorAll(
    ".attempt:nth-child(" + attempt + ") .hint"
  );
  hints.forEach((hint, index) => {
    hintDivs[index].style.backgroundColor = hint;
  });

  if (checkWin(guess)) {
    console.log("Congratulations! You've won the game!");
    displayComputerGuess();
    // Additional logic for what happens when the player wins
    // Show the message on the webpage
    let messageElement = document.getElementById("message");
    messageElement.textContent = "Congratulations! You've won the game!";
    messageElement.style.display = "block";
    renderSecretCode();
  } else {
    console.log("Incorrect guess. Keep trying!");
    if (attempt === tries) {
      console.log("Sorry, you've run out of attempts. You lose!");
      renderSecretCode();
      let restart = confirm("Would you like to restart the game?");
      if (restart) {
        attempt = 1;
        init(); // Restart the game
        return;
      }
    }
    // Additional logic for what happens when the player loses
    // Show the message on the webpage
    let messageElement = document.getElementById("message");
    messageElement.textContent = "Sorry, that was an incorrect guess.";
    messageElement.style.display = "block";
  }

  attempt++;
}

submit_button.addEventListener("click", submitGuess);
