import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">TicTacToe</h1>
        <p className="App-intro">
          <Game />
        </p>
      </div>
    );
  }
}

export default App;
