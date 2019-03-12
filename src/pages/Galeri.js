import React, { Component } from 'react';
import Contact from '../component/Contact';
import Content from '../component/Content';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Galeri1 from '../component/Galeri';
import Search from '../component/Search';
import Artikel from '../component/Artikel';
import Sidebar from '../component/Sidebar';
import AppAjax from '../containercomponent/ContainerBlog';

class Galeri extends Component {
  render() {
    return (
      <div>
        <Galeri1 />
        <Footer />
      </div>
    );
  }
}

export default Galeri;