
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Signin extends Component {
  state = { username: "", password: "" };
  changeInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  postLogin = () => {
    const {username, password} = this.state;
    const data = {
      username:username,
      password:password
    };
    const self = this;
    axios
    .post("https://login.free.beeceptor.com/login", data)
    .then(function(response){
      console.log(response.data);
      if (response.data.hasOwnProperty("full_name")) {
        localStorage.setItem("is_login", true);
        localStorage.setItem("full_name", response.data.full_name);
        localStorage.setItem("email", response.data.email);
        self.props.history.push("/profile")
      }
    })
    .catch(function(error){
      console.log(error);
    });
  };
  render(){
    console.log("state", this.state);
    return(
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <h4>SignIn</h4>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/><br />
            <input type="text" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
          </div>
          <button onClick={() => this.postLogin()}>SignIn</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}
  
export default withRouter(Signin);
