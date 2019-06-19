import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

function One() {
  <div>
     <h2> so 1 tap 1 </h2>
     <h3> so 1 tap 2 </h3>
     </div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
      </header>
    </div>
    );
  }
}


export default App;
