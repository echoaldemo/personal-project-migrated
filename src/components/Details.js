import React, { Component } from 'react';
import axios from 'axios';

import Backdrop from './Details/Backdrop';
import Poster from './Details/Poster';
import DataMovie from './Details/Movies/DataMovie';
import DataTV from './Details/TV/DataTV';

export default class Details extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dataLoaded: false,
            details: [],
        } 
    }

    componentDidMount(){
        var selectedType;
        this.props.location.state.movie ? selectedType = 'movie/' : selectedType = 'tv/' ;
        axios
        .get('https://api.themoviedb.org/3/' + selectedType + this.props.location.state.id + '?api_key=94e984afd53ff5b2b8dce4ada239682c&language=en-US&append_to_response=credits,images,videos')
        .then((result)=>{
            this.setState({
                details: result.data,
                dataLoaded: true,
            })
        })
    }

    render() {
        if (this.state.dataLoaded){
            var trailerKey;
            const { details } = this.state;
            const arr = details.videos.results.filter(e => e.type === "Trailer")
            if (arr.length === 1){trailerKey = arr[0].key;}else{trailerKey = arr[1].key;}
            return (
                <React.Fragment>
                    <section id="moreDetails">
                        <Backdrop path={details.backdrop_path}/>
                        <div className="container">
                            <Poster path={details.poster_path} trailerKey={trailerKey} />
                            {this.props.location.state.movie 
                            ? <DataMovie movie={details}/>
                            : <DataTV series={details}/>
                            }   
                        </div>
                    </section>
                </React.Fragment>
            );
        }else return null;
      }
}