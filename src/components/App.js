import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import Details from './Details';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
<div className="App">
        <Nav />
        <DieuHuongURL />
        <Footer />
      </div>
    </Router>
      
  );
}

export default App;
