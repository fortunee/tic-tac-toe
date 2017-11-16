import React, { Component } from 'react';

class Box extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  boxClick(props) {
    props.updateGameBoard(props.loc, props.turn);
  }

  resetBox(e) {
    console.log(e.target)
    e.target.innerHtml = '';
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


