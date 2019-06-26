import React, { Component } from 'react';

export default class DataMovie extends Component {

    render() {
        const { movie } = this.props;
        var date = new Date(movie.release_date);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var releaseDate = date.toLocaleDateString("en-US", options);

        let writers = [];

        movie.credits.crew.forEach(e => {
            if(e.job === "Writer" || e.job === "Screenplay")
                writers.push(e.name)
        });

        let cast = movie.credits.cast.map(element => {
            return element.name;    
        }).slice(0,10).join(', ');

        let director = movie.credits.crew.filter(e => e.job === "Director").map(e => e.name).join(' ');
        

        return (
            <React.Fragment>
            <div>
                <h2 className="panel-heading">Movie Info</h2>
                <div className="hr">
                    <span className="hr-title">{movie.title}</span>
                </div>
            </div>
            <div>
                <p className="overview deets">{movie.overview}</p>
                <p className="date deets">Release Date: <b>{releaseDate}</b></p>
                <p className="cast deets">
                    Cast: <b>{cast}</b>
                </p>
                <p className="direct deets">Directed by: <b>{director}</b></p>
                <p className="writer deets">Written by: <b>{writers.join(', ')}</b></p>
                <p className="score deets">User Score: <b><img alt="" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" className={movie.vote_average === 0 ? 'none' : 'star'}/>{movie.vote_average === 0 ? 'Movie not reviewed yet' : movie.vote_average}</b></p>
            </div>
            </React.Fragment>
        );
      }
}
