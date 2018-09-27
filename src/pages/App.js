import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ShowLinks from '../components/ShowLinks';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Blog for Sharing Link</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/pages/App.js</code> and save to reload. */}
          
        </p>
        <ShowLinks />
      </div>
    );
  }
}

export default App;
