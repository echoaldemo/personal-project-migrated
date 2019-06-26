import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MostPopular extends Component {
    render() {
        const { movie } = this.props;
        var path;
        if(movie.backdrop_path === null) {path = 'http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg'}
        else {path = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        return (
            <React.Fragment>
                <Link to={{
                    pathname: '/details/' + movie.id,
                    state: {
                        id: movie.id,
                        movie: true,
                    }
                }}>
                    <div className="overlay-image">
                        <img className="backdrop-img" src={path} alt="img-result" /> 
                        <div className="hover">     
                            <div className="text">
                                <img src={'https://image.tmdb.org/t/p/w92' + movie.poster_path} alt="img-result" />    
                                <p className="title" id={movie.id}>{movie.title}</p>
                                <b>User Score:</b> 
                                <img className="star" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" alt="img-result" /> 
                                {movie.vote_average}
                            </div>
                        </div>  
                    </div>
                </Link>
            </React.Fragment>
        );
      }
}
