import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';


export default class MovieSearch extends Component {
    render() {
        const { results } = this.props;
        const newArr = results.filter(e => e.poster_path !== null)
        return (
            <React.Fragment>
            {newArr.map(res => (
            <div className="result" key={res.id}>
                <Link to={{
                    pathname: '/details/' + res.id,
                    state: {
                        id: res.id,
                        movie: true,
                    }
                }}>
                <img id={res.id} className="poster-img" src={'https://image.tmdb.org/t/p/w185' + res.poster_path} alt="img-result" />
                </Link>                                
                <ul className="desc">
                        <li><b>{res.title}</b> ({
                            res.release_date === ''
                            ? ' Unknown'
                            : res.release_date.split('-')[0]
                            })</li>
                        <li>
                            <b>User Score:</b> 
                            
                            {res.vote_average === 0
                            ? ' N/A'
                            : <React.Fragment><img className="star" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png" alt="img-result"/>{res.vote_average}</React.Fragment>
                            }
                        </li>
                        <li><b>Overview:</b>
                            <div className="overview">
                                {res.overview === ''
                                ? 'No description available.'
                                : <TextTruncate
                                    line={5}
                                    truncateText="..."
                                    text={res.overview}
                                    />
                                }
                            </div>
                        </li>
                        <li><b>Genre:</b>Comedy</li>
                </ul>
            </div>
            ))}
            </React.Fragment>                  
        )
    }
}