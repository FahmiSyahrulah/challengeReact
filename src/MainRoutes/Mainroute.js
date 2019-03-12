import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Galeri from "../pages/Galeri";
import About from "../pages/About";
import AppBlog from "../pages/Blog";
import SignIn from "../component/Signin"
import Profile from "../component/Profile";

class Mainroute extends Component {
    render() {
      return (
        <Switch>
            <Route exact path="/" component={AppBlog}/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/galeri" component={Galeri}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signin" component={SignIn} />
        </Switch>
      );
    }
  }
  
export default Mainroute;