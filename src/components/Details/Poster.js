import React, { Component } from 'react';

export default class Poster extends Component {

    render() {
        const { path, trailerKey } = this.props;
        
        return (
            <div className="details-head">
                <img className="poster-large" src={'https://image.tmdb.org/t/p/original/' + path} alt="img-result"/>
                <div className="trailer">
                    <iframe title="trailer" width="600" height="345" src={'https://www.youtube.com/embed/' + trailerKey} style={{border: 'black'}} />              
                </div>
            </div>
        );
      }
}
