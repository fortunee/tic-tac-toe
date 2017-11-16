import React, { Component } from 'react';

import Box from './Box';

class Grid extends Component {

  constructor() {
    super();
    this.state = {
        boxes: [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ' 
        ],
        turn: 'X',
        winner: null,
        winnerLine: null,
    }
  }

  updateGameBoard(loc) {
    let boxes = this.state.boxes;
    if(boxes[loc] === 'X' || boxes[loc] === 'O' || this.state.winner) {
        // Invalid move
        return;
    }
    boxes.splice(loc, 1, this.state.turn);
    this.setState({
        boxes,
    })
    this.checkWinner();
  }

  checkWinner() {
    console.log('Checking winner:::')
    let boxes = this.state.boxes;

    let topRow = boxes[0] + boxes[1] + boxes[2];
    if(topRow.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let midRow = boxes[3] + boxes[4] + boxes[5];
    if(midRow.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let botRow = boxes[6] + boxes[7] + boxes[8];
    if(botRow.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let leftColumn = boxes[0] + boxes[3] + boxes[6];
    if(leftColumn.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let midColumn = boxes[1] + boxes[4] + boxes[7];
    if(midColumn.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let rightColumn = boxes[2] + boxes[5] + boxes[8];
    if(rightColumn.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let leftDiagonal = boxes[0] + boxes[4] + boxes[8];
    if(leftDiagonal.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    let rightDiagonal = boxes[2] + boxes[4] + boxes[6];
    if(rightDiagonal.match(/XXX|OOO/)) {
        this.setState({ winner: this.state.turn, winnerLine: `Player ${this.state.turn} won` })
        return;
    }

    // Calculate tie with number of moves
    let moves = boxes.join('').replace(/ /g, '');
    if(moves.length === 9) {
        this.setState({winnerLine: 'Game Tie'})
    }

    this.setState({ turn: (this.state.turn === 'X') ? 'O' : 'X' });
  }

  resetGameBoard() {
    this.setState({
        boxes: [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ' 
        ],
        turn: 'X',
        winner: null,
        winnerLine: null,
    })
  }

  render() {
    return (
        <div>
            <div id="notification">
                {(this.state.winnerLine) ? this.state.winnerLine : `Player ${this.state.turn}'s move`}
            </div>
            <div id="board">
                {
                    this.state.boxes.map((value, i) => {
                        return ( <Box 
                                    key={i}
                                    loc={i}
                                    value={value}
                                    updateGameBoard={this.updateGameBoard.bind(this)}
                                    turn={this.state.turn} />
                                )
                    })
                }
            </div>
            { this.state.winnerLine ? <button id="playAgainBtn" onClick={(e) => this.resetGameBoard(e)}>Play Again</button> : null }
        </div>
    );
  }
}

export default Grid;
