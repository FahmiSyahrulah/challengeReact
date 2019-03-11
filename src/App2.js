import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Galeri from './Galeri';

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Galeri />
        <Footer />
      </div>
    );
  }
}

export default App1;