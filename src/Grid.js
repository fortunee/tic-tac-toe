import React, { Component } from 'react';

import Box from './Box';

class Grid extends Component {
  render() {
    return (
        <div>
            <div id="notification">
                {(this.props.state.winnerLine) ? this.props.state.winnerLine : `Player ${this.props.state.turn}'s move`}
            </div>
            <div id="board">
                {
                    this.props.state.boxes.map((value, i) => {
                        return ( <Box 
                                    key={i}
                                    loc={i}
                                    value={value}
                                    updateGameBoard={this.props.updateGameBoard}
                                    turn={this.props.state.turn} />
                                )
                    })
                }
            </div>
            { this.props.state.winnerLine ? <button id="playAgainBtn" onClick={(e) => this.props.resetGameBoard(e)}>Play Again</button> : null }
        </div>
    );
  }
}

export default Grid;
