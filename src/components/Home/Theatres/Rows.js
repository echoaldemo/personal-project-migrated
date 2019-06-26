import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rows extends Component {
    render() {
        const { movies } = this.props;
        return (
            <React.Fragment>
            {movies.map(movie =>(
                <Link key={movie.id} to={{
                    pathname: '/details/' + movie.id,
                    state: {
                        id: movie.id,
                        movie: true,
                    }
                }}>
                <div className="info">
                <img className="backdrop-img" src={'https://image.tmdb.org/t/p/w780' + movie.backdrop_path} alt="img-result" />                         
                <span>
                    <div className="content">
                        <p className="title" id={movie.id}>{movie.title}</p>
                        <b>User Score:</b> 
                        <img className="star" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" alt="img-result" /> 
                        {movie.vote_average}
                    </div>     
                </span>
                </div>
                </Link>
            ))} 
            </React.Fragment>
        );
      }
}
