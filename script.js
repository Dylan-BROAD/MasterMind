const main_display = document.querySelector(".content");
const submit_button = document.getElementById("submit");
const reset_button = document.getElementById("reset");
const clear_button = document.getElementById("clear");

let codeLength = 4;
let trys = 10;
let colors = ["green", "blue", "red", "purple", "yellow", "orange"];

let random_code = [];
let attempt = 1;

init();

function init() {
  // Reset random_code and attempt
  random_code = [];
  attempt = 1;

  // Clear gameBoard and colorChoice
  //main_display.innerHTML = " ";
  //colorChoice.innerHTML = " ";

  // Display board
  for (let i = 1; i <= trys; i++) {
    let div_attempt = document.createElement("div");
    div_attempt.setAttribute("id", "attempt-" + i);
    div_attempt.setAttribute("class", "attempt");
    let div_hintColumn = document.createElement("div");
    div_hintColumn.setAttribute("class", "hintColumn");
    let div_guessColumn = document.createElement("div");
    div_guessColumn.setAttribute("class", "guessColumn");

    for (let j = 1; j <= codeLength; j++) {
      let div_tr = document.createElement("div");
      let div_gr = document.createElement("div");
      div_hintColumn.append(div_tr);
      div_guessColumn.append(div_gr); // Append div_gr to div_guessColumn
    }

    // Append both rows to the attempt div
    div_attempt.append(div_hintColumn);
    div_attempt.append(div_guessColumn);

    // Prepend the attempt div to content_display
    main_display.append(div_attempt);
  }
}
