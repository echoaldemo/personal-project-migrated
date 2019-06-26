import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MostPopularTV extends Component {
    render() {
        const { series } = this.props;
        return (
            <React.Fragment>
             <Link to={{
                    pathname: '/details/' + series.id,
                    state: {
                        id: series.id,
                        movie: false,
                    }
            }}>
            <div className="overlay-image">
                <img className="backdrop-img" src={'https://image.tmdb.org/t/p/w780' + series.backdrop_path} alt="img-result" /> 
                <div className="hover">     
                    <div className="text">
                        <img src={'https://image.tmdb.org/t/p/w92' + series.poster_path} alt="img-result" />    
                        <p className="tvID" id={series.id}>{series.name}</p>
                        <b>User Score:</b> 
                        <img className="star" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" alt="img-result" /> 
                        {series.vote_average}
                    </div>
                </div>  
            </div>
            </Link>
            </React.Fragment>
        );
      }
}
