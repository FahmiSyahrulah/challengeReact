import React, { Component } from 'react';
import axios from 'axios';
import Artikel from '../component/Artikel';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';
import Kategori from '../component/Kategori';
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";

class AppAjax extends Component {

    componentDidMount = () => {
        this.props.newsLists()
    }
    handleInputChange = e => {
    this.props.searchNews(e.target.value)
    this.props.newsKategori(e.target.textContent)
    };

    render(){
        return(
            <div className="App">
                    <div className="container">
                    <div className="row justify-content-md-between">
                    <Search doSearch = {this.handleInputChange} />
                    <div className="mb-1 mt-md-4 col-md-6"> 
                    <Kategori doSearching = {this.handleInputChange}/>
                    </div>
                </div>
            </div>

                <div class="row">
                    <div class = "col-md-4">
                    <span>Berita Terhangat</span>
                    {this.props.topNews.map((item, key) => {
                        return <Sidebar key={key} title={item.title}/>;
                    })}
                    </div>
                    <div class = "col-md-8">    
                    {this.props.listNews.map((item, key) => {
                        const src_img = item.urlToImage
                        const content = item.content
                        return <Artikel key={key} title={item.title} img={src_img} content={content} author={item.author} />;
                    })}
                    </div>
                </div>
        </div>
        );
    }
}
export default connect('topNews, listNews', actions)(withRouter(AppAjax));