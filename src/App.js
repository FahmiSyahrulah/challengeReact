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
import AppAjax from './containercomponent/ContainerBlog';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppAjax />
        <Footer />
      </div>
    );
  }
}

export default App;