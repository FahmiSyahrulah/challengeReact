import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact';
import Content from './component/Content';
import Header from './component/Header';
import Footer from './component/Footer';
import Galeri from './component/Galeri';
import Search from './component/Search';
import Artikel from './component/Artikel';
import Sidebar from './component/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <div class="row">
            <div class = "col-md-4">
            <Sidebar />
            </div>
            <div class = "col-md-8">
            <Artikel />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;