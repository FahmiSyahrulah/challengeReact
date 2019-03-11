import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <footer>
            <div className="container">
                <div className="row justify-content-between">
                    <div id="outer-footer-logo" className="col-md-3">
                        <img className="mx-auto mx-md-0 d-block" id="footer-logo" src={require('../img/logo_w.png')} alt=""/>
                        <p id="p-footer-logo" className="mt-3 text-md-left text-center">&#169; Copyright Alterra Group 2019</p>
                        
                    </div>
                    <div className="text-right mt-3 mt-md-0 col-md-3">
                        <p id="p-follow" className="text-center text-md-right">Follow Us On</p>
                        <table id="tbl-footer" className="mx-auto float-md-right">
                            <tr>
                                <td className="img-socmed"><img src={require('../ico/ico-fb-2x.png')} alt=""/></td>
                                <td className="p-socmed"><a href="">Facebook</a></td>
                            </tr>
                            <tr>
                                <td className="img-socmed"><img src={require('../ico/ico-ig-2x.png')} alt=""/></td>
                                <td className="p-socmed"><a href="">Instagram</a></td>
                                </tr>
                            <tr>
                                <td className="img-socmed"><img src={require('../ico/ico-twitter-2x.png')} alt=""/></td>
                                <td className="p-socmed"><a href="">Twitter</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </footer> 
      </div>
    );
  }
}

export default Footer;
