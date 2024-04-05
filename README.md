- [x] Your choice of game.
- [x] A wireframe of your "main" game screen.
- [x] Pseudocode for the overall game play.
- [x] User story

Necessary Deliverables:

- [x] Your game's Title: Description of the game. Background info of the game.

  Description:
  The codemaker chooses the colours and pattern at the start of the game, only the codemaker knows the answer. The codebreaker tries to guess the pattern, in both order and color, within 10 turns. Each guess is made by placing a row of code pegs on the decoding board.

  Backgroud Info:
  This game was first created as a board game by the inventor Mordecai Meirowitz. In the early 1970's Mordecai searched for a company to help bring this game to life, which he did. That company being Invicta Plastics.

- [x] Screenshots of the actual game.
      https://imgur.com/a/W0S3q3f

- [x] Technologies Used: List of technologies, JS, HTML, CSS.

  This game is created by using a mix of vanilla JS with the addition of HTML and CSS elements.

- [x] Getting Started: Include link to your deployed game and instructions deemed important.

  https://dylan-broad.github.io/MasterMind/

  Instructions can be found in-game.

- [x] Next Steps: Planned future enhancements

Future additions:

- Multiplayer
- Refined design
- Add scoring system

Game choice:
I have chosen to make a childhood favourite game, MasterMind.

WIREFRAME DESIGN:
https://www.figma.com/file/EM5Q6nCUC1bnLBbMAEGeo3/Welcome-to-FigJam?type=whiteboard&node-id=0%3A1&t=vr8kFh3eSETfHYtb-1

Description:
The codemaker chooses the colours and pattern at the start of the game, only the codemaker knows the answer. The codebreaker tries to guess the pattern, in both order and color, within 10 turns. Each guess is made by placing a row of code pegs on the decoding board.

Rules:
User gets 10 guesses.
User receives information regarding guesses to act as "hints".

User story:

- I should be able to render new game.
- I should be able to change colour selections.
- I should see current and previous guesses on main game board.
- I should see correct/incorrect guesses on the guess panel in reference to my guess.
- If I guess correct, I want to see the original computer code to confirm I was right.
- I want to be congratulated for winning the game.
- If I am unable to guess correctly in the allocated amount of guesses, the computer code should be shown to me.
- I want to be told I did not win.

Pseudocode:

- The game will begin with a random set of 4 colours being chosen in a random order.
- The user will then choose 4 colours in their choice of order.
- The board will signify their choice by displaying the guess on the mainboard and the guess panel on the left.
- The guess board will return 1 of 3 options;
  1, All correct (Colour and position) marked by BLACK dot.
  2, Correct colour but not correct position marked by a WHITE dot.
  3, All Incorrect marked with GRAY dot.
- User will have 10 guesses to achieve the correct colours and their positions.
- If user is able to guess within the 10 attempts, user wins. Webpage will show user win.
- If user is unable to guess correctly, user loses. Webpage will prompt user loss.
- Users correct winning guess displays computers initiated code.
- If user is unsuccessful in guessing correctly, game shows computers code.
