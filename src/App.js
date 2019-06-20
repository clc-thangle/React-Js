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
        <div className="container">
        <div className="row pt-5">
        <Content tieude="cach su dung props bang props" anh = "img/01.jpg" trichdan="day la trich dan so 1"/>
        <Content tieude="tin tuc so 2" anh="img/02.jpg" trichdan="day la trich dan so 2"/>
        <Content tieude="tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="day la trich dan so 3"/>
        
        <Content tieude="cach su dung props bang props" anh = "img/01.jpg" trichdan="day la trich dan so 1"/>
        <Content tieude="tin tuc so 2" anh="img/02.jpg" trichdan="day la trich dan so 2"/>
        <Content tieude="tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="day la trich dan so 3"/>

        <Content tieude="cach su dung props bang props" anh = "img/01.jpg" trichdan="day la trich dan so 1"/>
        <Content tieude="tin tuc so 2" anh="img/02.jpg" trichdan="day la trich dan so 2"/>
        <Content tieude="tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="day la trich dan so 3"/>
        </div>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
