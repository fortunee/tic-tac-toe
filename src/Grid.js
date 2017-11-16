import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Box from './Box';

class Grid extends Component {

  constructor() {
    super();
    this.state = {
        turn: 'X',
        boxes: Array(9).fill(''),
        gameOver: false,
        winner: undefined,
        totalMoves: 0,
        // gameResetted: true
    }
  }

  makeMove(e, props) {
    if (!this.state.gameOver && this.state.boxes[e.target.dataset.square] === '') {
        this.state.boxes[e.target.dataset.square] = this.state.turn;
        e.target.innerHTML = `<span>${this.state.turn}</span>`;
        
        this.setState({
            turn: this.state.turn === 'X' ? 'O' : 'X',
            boxes: this.state.boxes,
            totalMoves: this.state.totalMoves+=1,
            // gameResetted: false
        });
        let possibleWinner = props.checkWinner(this.state.boxes, this.state.totalMoves);
        console.log(possibleWinner)
        if (possibleWinner) {
            this.setState({
                gameOver: true,
                winner: possibleWinner,
                winnerLine: (possibleWinner === 'draw') ? 'Game Drawn ' : `Game won by player ${possibleWinner}`
            })
        } 
    }
  }

  resetGame(e) {
      
      this.setState(
        {
            turn: 'X',
            boxes: Array(9).fill(''),
            gameOver: false,
            winner: undefined,
            totalMoves: 0,
            // gameResetted: true
        }
      )
  }


  render() {
    return (
        <div>
            <div id="notification">
                {(this.state.gameOver) ? this.state.winnerLine : `Player ${this.state.turn}'s move`}
            </div>
            <div id="board" onClick={(e) => this.makeMove(e, this.props)}>
                { this.state.boxes.map((box, i) => {
                        return <Box key={i} dataSquare={i} />
                    })
                }
            </div>
            { this.state.gameOver ? <button id="playAgainBtn" onClick={(e) => this.resetGame(e)}>Play again</button> : null }
        </div>
    );
  }
}

export default Grid;
