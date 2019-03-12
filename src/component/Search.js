import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
        <form class="form-inline mt-2 mt-md-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.props.doSearch}/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
  }
}

export default Search;
