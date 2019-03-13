import React, { Component } from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";


const Header = props => {
    return (
        <header> 
            <div className="container">
                <div className="row justify-content-md-between">
                    <div className="mt-md-2 offset-4 col-4 offset-md-0 col-md-4">
                        <img className="img" src={require ('../img/logo.png')} alt=""/>
                    </div>
                    <div className="mb-1 mt-md-4 col-md-6">
                        <ul id="main-nav" className="nav nav-justified">
                            <li className="nav-item">
                                <Link to="/">BLOG</Link>
                            </li>   
                            <li className="nav-item">
                                <Link to="/home">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/galeri">GALERI</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">PROFILE</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signin">SIGNIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" onClick={() => this.props.postLogout()}>LOGOUT</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    );
  }

  export default connect(actions)(withRouter(Header));
