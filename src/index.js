import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ajax from './approute';
import Contact from './component/Contact';
import * as serviceWorker from './serviceWorker';
import AppBlog from './pages/Blog';
import {BrowserRouter} from "react-router-dom"

const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        rootEl
    );
render (Ajax);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
