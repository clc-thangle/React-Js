import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Content.js';
import Footer from './Component/Footer/Footer';

class App extends Component {

  render () {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Content tieude="cach su dung props bang props" vitri1="order-lg-12" vitri2="order-lg-1" trichdan="day la trich dan so 1"/>
        <Content tieude="tin tuc so 2" anh="img/02.jpg" trichdan="day la trich dan so 2"/>
        <Content tieude="tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="day la trich dan so 3"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
