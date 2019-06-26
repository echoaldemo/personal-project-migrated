import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <React.Fragment>
        <footer>
            <div className="footer-text">
                <label>Powered by:</label>
                <div className="logo">
                        <img src="https://cdn-images-1.medium.com/max/1200/1*vIR7iO-1GnY2xYxL6NiYkw.png" className="logo-img" alt="rotten" />
                </div>
            </div>
        </footer>
        </React.Fragment>
    );
  }
}