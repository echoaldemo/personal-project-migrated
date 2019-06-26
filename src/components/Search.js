import React, { Component } from 'react';
import axios from 'axios';

import TVSearch from './Search/TVSearch';
import MovieSearch from './Search/MovieSearch';


export default class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movieResults: [],
            tvResults: [],
            dataLoaded: false,
            string: '',
        }
    }

    componentDidMount(){
        axios
        .get('https://api.themoviedb.org/3/search/tv?api_key=94e984afd53ff5b2b8dce4ada239682c&query=' + this.props.match.params.string)
        .then((result)=>{
            console.log(result.data.results);
            this.setState({
                tvResults: result.data.results,
                dataLoaded: true,
            })
        })

        axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=94e984afd53ff5b2b8dce4ada239682c&query=' + this.props.match.params.string)
        .then((result)=>{
            this.setState({
                movieResults: result.data.results,
            })
        })
    }

    render() {
        if (this.state.dataLoaded){
            return (
                <React.Fragment>
                    <section id="searchResults">
                    <div className="result-container">
                        <div className="type">
                            <label>TV</label>
                        </div>
                        <div className="poster">
                            <TVSearch results={this.state.tvResults} />
                        </div>
                    </div>
                    <div className="result-container">
                        <div className="type">
                            <label>Movies</label>
                        </div>
                        <div className="poster">
                            <MovieSearch results={this.state.movieResults} />
                        </div>
                    </div>
                    </section>
                </React.Fragment>
            );
        }
        else return null;
    }
}