import React, { Component } from 'react';
import './Galeri.css'

class Galeri extends Component {
  render() {
    return (
      <div className="App">
            <div className="container" id="contain1">
            <div className="row">
                <img src={require('../ico/ico-gallery.png')} id="icon" alt=""/>
                <h4>GALLERY</h4>
            </div>
            <hr/>
            <div id="top-img" className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/ryan-1321510-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/jay-lee-1323073-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/nic-yee-1321843-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/nordwood-themes-1319985-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/phil-desforges-1322844-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm 12 justify-content-around">
                    <img
                        src={require('../img/exp-gallery/ryan-1321510-unsplash.jpg')}
                        className="gallery-item mx-auto d-block"
                        id="gambar"
                        alt=""/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Galeri ;
