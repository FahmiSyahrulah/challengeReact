import React, { Component } from 'react';
import axios from 'axios';
import Artikel from '../component/Artikel';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Search from '../component/Search';
import Kategori from '../component/Kategori';

const apiKey = "0141b5fbbbdd412da424f5c2b2b7844f";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" +"pageSize=5&" + "country=us&" + "apiKey=" + apiKey;
const urlHeadline2 = baseUrl + "everything?" + "q=night&"+"pageSize=5&"+ "apiKey=" + apiKey;

class AppAjax extends Component {
    constructor (props){
        super(props);
        this.state ={
            listNews: [],
            TopNews:[],
            search: "",
            isLogin: false
        };
        // this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount = () => {
        const self = this;
        axios 
        .get(urlHeadline)
        .then(function(response){
            self.setState({TopNews: response.data.articles});
            // console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })

        axios 
        .get(urlHeadline2)
        .then(function(response){
            self.setState({listNews: response.data.articles});
            // console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    };
    handleInputChange = e => {
    console.log("event", e.target.value);
    let value = e.target.value;

    this.setState({
        search: value
    }, () => {
        this.searchNews(value)
    });
    };

    searchNews = async keyword => {
        console.log("search News", keyword)
        const self = this;

        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
                );
                // console.log(response);
                self.setState({listNews: response.data.articles})
            } catch (error) {
                console.error(error);
            }
        }
    };
    handleChange (e) {
        let kategori = e.target.textContent;
        console.log('kategori    : ', kategori)
        const urlEndPoint = baseUrl + "everything?q="+kategori+"&apiKey=" + apiKey;
        console.log('url     :', urlEndPoint);
        
        let self = this;
        axios.get(urlEndPoint).then(function(response){
            self.setState({
                listNews : response.data.articles
            })
            console.log('liiissstttt :     ', response.data.articles)
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
                    <div className="container">
                    <div className="row justify-content-md-between">
                    <Search doSearch = {this.handleInputChange} />
                    <div className="mb-1 mt-md-4 col-md-6">
                    {/* <Kategori doSearching = {this.handleChange}/> */}
                    <ul id="main-nav" className="nav nav-justified">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => this.handleChange(e)}>Sports</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => this.handleChange(e)}>Politics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => this.handleChange(e)}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => this.handleChange(e)}>Lifestyle</a>
                            </li>      
                        </ul>
                    </div>
                </div>
            </div>

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
        );
    }
}
export default AppAjax;