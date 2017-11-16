import React, { Component } from 'react';

class Box extends Component {

  constructor() {
    super();
  }

  boxClick(props) {
    props.updateGameBoard(props.loc);
  }

  render() {
    return (
        <div className={'square tile ' + this.props.loc } onClick={() => this.boxClick(this.props)}>
          <p>{this.props.value}</p>
        </div>
    );
  }
}

export default Box;


