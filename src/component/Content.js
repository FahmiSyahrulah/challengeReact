import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="App">
            <div id="main-profile"> 
                <div className="container">
                    <div className="row mt-3 mt-md-0">
                        <img className="img-fluid mx-auto d-block rounded-circle" id="img-profile" src={require('../img/foto.jpg')} alt=""/>
                    </div>
                    <div className="row">
                        <p id="name-profile" className="mx-auto d-block">Hiera Olivera</p>
                    </div>
                    <div className="row">
                        <p id="p-malang" className="mx-auto d-block"><img id="span-loc" src={require ('../ico/ico-loc-2x.png')}/>
                        <span /> Malang, East Java, Indonesia</p>
                    </div>
                    <div className="row">
                        <p id="p-java" className="mx-auto d-block">Frontent Dev , UI/UX and Design</p>
                    </div>
                    <div className="row">
                        <button type="button" id="btn-cv" className="btn mx-auto d-block">Download CV</button>
                    </div>
                </div>
            </div>  
            <div id="main-content">
                <div className="container-fluid container-content">
                    <div id="row-content" className="row p-0 p-md-5">
                        <div className="col-md-6">
                            <h2 className="h-content">About Me</h2>
                            <p className="p-content">Hi! I am <strong>Hian Oliviera</strong>, I work as a Front-end Developer at <span id="span-alterra">Alterra Group</span>.</p>
                            <p className="p-content">Front-end Developer are constructive work websites use HTML,CSS, and JavaScript. </p>
                            <p className="p-content">Front-end Developer are the people who make it design and develop the design until become a website that can run.</p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="h-content">Information</h2>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Age</th>
                                        <td>: 22th</td>
                                    </tr>
                                    <tr className="table-active">
                                        <th scope="row">Email</th>
                                        <td>: oliviera@alphatech.id</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>: Malang</td>
                                    </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
      </div>
    );
  }
}

export default Content  ;
