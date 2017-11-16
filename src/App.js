import React, { Component } from 'react';
import './App.css';

import Grid from './Grid';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
    
  render() {
    return (
      <div id="game">
        <Grid />
      </div>
    );
  }
}

export default App;

