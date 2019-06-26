import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: ''
        };
      }
    
    updateText(value) {
        var encoded = encodeURI(value)
        this.setState({ text: encoded });
    }

    render() {
    return (

        <div className="navbar">
            <div className="logo">
                <img src="https://cdn-images-1.medium.com/max/1200/1*vIR7iO-1GnY2xYxL6NiYkw.png" className="logo-img" alt="rotten" />
            </div>

            <div className="appName">
                The Movie <br/>Database
            </div>

            <div className="search">
                <div className="searchBox-fakeInput">
                    <div className="searchBox-inputWrapper searchBox-inputWrapper_bordered">
                    <input autoComplete="off" type="text" id="search" className="form-control searchBox-input js-searchBox-input" placeholder="Search movies or TV" onChange={e => this.updateText(e.target.value)} />
                    </div>
                    <Link to={'/search/query=' + this.state.text} key={this.state.text}>
                    <button id="searchBtn">Search</button>
                    </Link>
                </div>
            </div>


            <div className="nav-items">
                <div>movies</div>
                <div>tv</div>
            </div>  

        </div>

    );
  }
}