import React, { Component } from 'react';
import './Artikel.css';


class Artikel extends Component {
  render() {
    return (
        <div class="card">
        <img class="card-img-top" src={this.props.img} alt=""/>
        <div class="card-body">
        <p class="card-post">Posted at 12-02-2019</p>
        <p class="card-post">Oleh : {this.props.author}</p>
        <p class="card-title">{this.props.title} </p>
          <p class="card-text">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Artikel   ;  
