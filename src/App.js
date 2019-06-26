import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes.js';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

export default class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="main-container center">
          <Navbar />
          <Routes />
          <Footer />
        </div>   
      </HashRouter>
    );
  }
}
