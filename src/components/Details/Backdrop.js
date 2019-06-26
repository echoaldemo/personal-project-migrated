import React, { Component } from 'react';

export default class Backdrop extends Component {

    render() {
        const { path } = this.props;
        
        return (
             <div className="backdrop-large" style={
                 {backgroundImage: `linear-gradient(rgba(4, 4, 36, 0.31), rgba(14, 14, 14, 0.76)), url(https://image.tmdb.org/t/p/original/${path})`}
                } />
        );
      }
}
