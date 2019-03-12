import React, { Component } from 'react';
import axios from 'axios';
import Artikel from '../component/Artikel';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';

const apiKey = "0141b5fbbbdd412da424f5c2b2b7844f";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" +"pageSize=5&" + "country=us&" + "apiKey=" + apiKey;
const urlHeadline2 = baseUrl + "everything?" + "q=night&"+"pageSize=5&"+ "apiKey=" + apiKey;

class AppAjax extends Component {
    constructor (props){
        super(props);
        this.state ={
            listNews: [],
            TopNews:[]
        };
    }
    componentDidMount = () => {
        const self = this;
        axios 
        .get(urlHeadline)
        .then(function(response){
            self.setState({TopNews: response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })

        axios 
        .get(urlHeadline2)
        .then(function(response){
            self.setState({listNews: response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    };
    render(){
        const {listNews} = this.state;
        const {TopNews} = this.state;
        return(
            <div className="App">
                <Search />
                <div class="row">
                    <div class = "col-md-4">
                    <span>Berita Terhangat</span>
                    {TopNews.map((item, key) => {
                        return <Sidebar key={key} title={item.title}/>;
                    })}
                    </div>
                    <div class = "col-md-8">
                    {listNews.map((item, key) => {
                        const src_img = item.urlToImage
                        const content = item.content
                        return <Artikel key={key} title={item.title} img={src_img} content={content} author={item.author} />;
                    })}
                    </div>
                </div>
        </div>
        )
    }
}

export default AppAjax;