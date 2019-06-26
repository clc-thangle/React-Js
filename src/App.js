import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from "./firebaseConnect.js";
import React, { Component } from 'react';
class App extends Component {
  
  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
    );
  }
}


export default App;
