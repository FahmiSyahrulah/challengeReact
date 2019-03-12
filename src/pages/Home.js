import React, { Component } from 'react';
import Contact from '../component/Contact';
import Content from '../component/Content';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Galeri from '../component/Galeri';
import Search from '../component/Search';
import Artikel from '../component/Artikel';
import Sidebar from '../component/Sidebar';
import AppAjax from '../containercomponent/ContainerBlog';

class Home extends Component {
  render() {
    return (
      <div>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;