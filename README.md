User story:
- I should be able to render new game.
- I should be able to change colour selections.
- I should see current and previous guesses on main game board.
- I should see correct/incorrect guesses on the guess panel in reference to my guess.
- If I guess correct, I want to see the original computer code to confirm I was right. 
- I want to be congratulated for winning the game.
- If I am unable to guess correctly in the allocated amount of guesses, the computer code should be shown to me.
- I want to be told I did not win.
- The option to play again should be available.
- A scoreboard should also be displayed showing “player vs computer” displaying relevant scoring. 



Pseudocode:
- The game will begin with a random set of 4 colours being chosen in a random order.
- The user will then choose 4 colours in their choice of order.
- The board will signify their choice by displaying the guess on the mainboard and the guess panel on the left. 
- The guess board will return 1 of 3 options;
    1, All correct (Colour and position) marked by BLACK dot.
    2, Correct colour but not correct position marked by a GRAY dot.
    3, All Incorrect marked with WHITE dot.
- User will have 10 guesses to achieve the correct colours and their positions.
- If user is able to guess within the 10 attempts, user wins. Webpage will show user win.
- If user is unable to guess correctly, user loses. Webpage will prompt user loss.
- Users correct winning guess displays computers initiated code.
- If user is unsuccessful in guessing correctly, game shows computers code.
- When end game is reached, prompt user to replay and loop to start.
- If user win add point to user, if user loses add point to computer.

Future additions:
- Multiplayer
- Refined design
- Better scoring system 