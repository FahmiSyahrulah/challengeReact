import React, { Component } from 'react';
import './Artikel.css';


class Artikel extends Component {
  render() {
    return (
        <div class="card">
        <img class="card-img-top" src={require('../img/konser.jpg')} alt=""/>
        <div class="card-body">
        <p class="card-post">Posted at 12-02-2019</p>
        <p class="card-post">Oleh : Fahmi</p>
        <p class="card-title">Konser musik berakhir ricuh </p>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    );
  }
}

export default Artikel   ;  
