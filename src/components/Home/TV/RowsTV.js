import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class RowsTV extends Component {
    render() {
        const { series } = this.props;
        return (
            <React.Fragment>
                
            {series.map(serie =>(
                <Link key={serie.id} to={{
                    pathname: '/details/' + serie.id,
                    state: {
                        id: serie.id,
                        movie: false,
                    }
                }}>
                <div className="info" key={serie.id}>
                <img className="upcomingTV" src={'https://image.tmdb.org/t/p/original' + serie.poster_path} alt="img-result" />                         
                <span>
                    <div className="content">
                        <p className="tvID" id={serie.id}>{serie.name}</p>
                        <b>User Score:</b> 
                        <img className="star" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" alt="img-result"/> 
                        {serie.vote_average}
                    </div>     
                </span>
                </div>
                </Link>
            ))} 
            </React.Fragment>
        );
      }
}
