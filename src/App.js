import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';


class App extends Component {
  
  render() {

    // var a1 = [3,5,6,7];
    // var a2 = [...a1];
    // console.log(a1);
    // a2[0]=100;
    // console.log(a2);
    
    var b1 = {
      num : [34,35,36],
      status : true
    }
    var b2 = {...b1,status:false};
    console.log(b2);
    var b3 = {...b1,num:[...b1.num,100]};

    console.log(b3);
    
    
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
