# TIC TAC TOE

This is a simple tic tac to game built with ReactJS

## Game Spec
**App Component:** The app component have the following methods 
- `updateGameBoard` - Updates the boxes when a move is made
- `checkWinner` - Checks to see if a player has one (invoke after every move)
- `resetGameBoard` - For resetting the board & the board data itself.

Most of these methods are passed in as props to the child components below.

**Grid component:** The grid component takes in the board data, and uses that data to display a grid of box components.

**Box component:** A box component displays the mark that is currently within the box. Which is either "X", "O", or, " ". Clicking on this box runs a method that checks to see if the box is unmarked. 

When the game is over, the players have the option to play again. This is accomplished via resetting the board data with `resetGameBoard` method, NOT refreshing the page.
It also display if there is either a Win or a Tie, specifying which player has won.

The current player is visible on the page. _e.g. X or O's move_.

## Steps to setup
- `git clone https://github.com/fortunee/tic-tac-toe.git`
- `cd <`cloned-directory`>` _Could be **tic-tac-toe** by default_
- `npm install`
- `npm start`


