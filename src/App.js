import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 3
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React CHERRRYYYYY</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button id='btn-test-add' onClick={() => this.setState(prev => ({ count: prev.count + 1 }))}>
          CLICKMEEEE
        </button>
        <p id="counter">
          {this.state.count}
        </p>
      </div>
    );
  }
}

export default App;
