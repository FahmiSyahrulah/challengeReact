import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header> 
            <div className="container">
                <div className="row justify-content-md-between">
                    <div className="mt-md-2 offset-4 col-4 offset-md-0 col-md-4">
                        <img className="img" src={require ('../img/logo.png')} alt=""/>
                    </div>
                    <div className="mb-1 mt-md-4 col-md-6">
                        <ul id="main-nav" className="nav nav-justified">
                            <li className="nav-item">
                                <a className="nav-link nav-active" href="#">ABOUT</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="galeri.html">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">CONTACT</a>
                            </li>   
                        </ul>

                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Header   ;
