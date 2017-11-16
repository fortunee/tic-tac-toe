import React, { Component } from 'react';

class Box extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  resetBox(e) {
    console.log(e.target)
    e.target.innerHtml = '';
  }

  render() {
    return (
        <div className='square' data-square={this.props.dataSquare}></div>
        // <div className={(this.props.gameResetted) ? 'reset square' : 'square'} data-square={this.props.dataSquare}></div>
    );
  }
}

export default Box;


