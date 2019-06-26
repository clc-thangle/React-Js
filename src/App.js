import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from "./firebaseConnect.js";
import React, { Component } from 'react';
import * as firebase from 'firebase'
class App extends Component {
  
  pushData  = () => {
    var connectData = firebase.database().ref('datoForNote');
    connectData.push({
      tieude : "ghi chu so 3",
      content : "noi dung ghi chu so 3"
    })
    console.log('ban vua them moi du lieu vao firebase');
    
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <button onClick={()=> this.pushData()}>Click de them moi bang ham push</button>
    </div>
    );
  }
}


export default App;
