import React, { Component } from 'react';
import './Sidebar.css';
import axios from 'axios';

class Sidebar extends Component {
  render() {
    return (
        <div className="App">
        
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{this.props.title}</a>
        </div>
        </div>
    );
  }
}

export default Sidebar  ;  