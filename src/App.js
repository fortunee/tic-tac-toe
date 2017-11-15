import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameOver: false,
      winner: undefined,
      board: Array(9).fill(''),
      totalMoves: 0
    }
  }

  clicked(event) {
    if (!this.state.gameOver && this.state.board[event.target.dataset.square] === '') {
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn == 'X' ? 'O' : 'X',
        board: this.state.board,
        totalMoves: this.state.totalMoves+=1
      });
      let possibleWinner = this.checkWinner();
      if (possibleWinner) {
        this.setState({
          gameOver: true,
          winner: possibleWinner,
          winnerLine: (possibleWinner === 'draw') ? 'Game Drawn ' : `Game won by ${possibleWinner}`
        })
      } 
    };
  }

  checkWinner() {
    let possibleWinnerMoves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    let board = this.state.board;

    for(let i=0;i<possibleWinnerMoves.length;i++) {
      if(board[possibleWinnerMoves[i][0]] == board[possibleWinnerMoves[i][1]] && board[possibleWinnerMoves[i][1]] == board[possibleWinnerMoves[i][2]])
          return board[possibleWinnerMoves[i][0]];
      else if(this.state.totalMoves === 9)
        return 'draw';
    }
  }

  playAgain() {
    
  }

  render() {
    return (
      <div id="game">
        <div id="head">
          Player { this.state.turn }'s move
        </div>
        <div id="board" onClick={(e) => this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
        <div id="status">{this.state.winnerLine}</div>
      </div>
    );
  }
}

export default App;
