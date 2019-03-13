import React, { Component } from 'react';
import './Kategori.css';
import Search from './Search';

class Kategori extends Component {
    render() {
        return (
            <ul id="main-nav" className="nav nav-justified">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.doSearching(e)}>Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.doSearching(e)}>Politics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.doSearching(e)}>Business</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => this.props.doSearching(e)}>Lifestyle</a>
                </li>
            </ul>

        );
    }
}

export default Kategori;
