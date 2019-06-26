import React, { Component } from 'react';

import axios from 'axios';

import MostPopular from './Theatres/MostPopular';
import Rows from './Theatres/Rows';
import MostPopularTV from './TV/MostPopularTV';
import RowsTV from './TV/RowsTV';


export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            dataLoaded: false,
            TheatreMovies: [],
            UpcomingTv: [],
        } 
        this.randomizeTheatre = this.randomizeTheatre.bind(this);
        this.randomizeTv = this.randomizeTv.bind(this);
    }
    
      componentDidMount(){
          axios
          .get('https://api.themoviedb.org/3/discover/movie?api_key=94e984afd53ff5b2b8dce4ada239682c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&certification.lte=R&certification_country=US&page=1&primary_release_date.gte=2019-06-01&primary_release_date.lte=2019-06-24')
          .then(response => {
              this.randomizeTheatre(response.data.results.filter(e => e.backdrop_path !== null && e.vote_average > 5));
            });
    
          axios
          .get('https://api.themoviedb.org/3/tv/on_the_air?api_key=94e984afd53ff5b2b8dce4ada239682c&language=en-US&page=1')
          .then(response => {
            this.randomizeTv(response.data.results);
          });
      }
    
    
      randomizeTheatre(arr){
          var n = 7, 
          result = new Array(n),
          len = arr.length,
          taken = new Array(len);
          if (n > len)
              throw new RangeError("getRandom: more elements taken than available");
          while (n--) {
              var x = Math.floor(Math.random() * len);
              result[n] = arr[x in taken ? taken[x] : x];
              taken[x] = --len in taken ? taken[len] : len;
          }

          this.setState({
              TheatreMovies: result
          })
      }
    
      randomizeTv(arr){
        var n = 7, 
        result = new Array(n),
        len = arr.length,
        taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        this.setState({
            UpcomingTv: result,
            dataLoaded: true,
        })
      }

    render() {
        if (this.state.dataLoaded){
            const { TheatreMovies, UpcomingTv } = this.state;
            return (
            <React.Fragment>
                <section id="homepage">

                    <div className="type header">
                        <label>NOW PLAYING IN THEATRES</label>
                    </div>

                    
                    <div className="main" id="main">
                            
                        <div className="th-column">
                            <div className="info th-first" id="firstcol">   
                            <MostPopular movie={TheatreMovies[0]}/>                         
                            </div>
                        
                            <div className="secondrow" id="secondRow">
                            <Rows movies={TheatreMovies.slice(2,4)} />
                            </div>
                        </div>

                        <div className="th-column">
                            <div className="secondrow" id="secondRowCol">
                            <Rows movies={TheatreMovies.slice(5,7)} />
                            </div>

                            <div className="info th-first" id="secondColRow">
                            <MostPopular movie={TheatreMovies[1]}/>                                                     
                            </div>   
                        </div>
                    
                    </div>

            

                    <div className="type header">
                            <label>UPCOMING ON TV</label>
                    </div>


                    <div className="tv" id="main">
                        <div className="tv-column">
                            <div className="info th-first" id="tvfirstcol">
                            <MostPopularTV series={UpcomingTv[0]}/>
                            </div>
                            
                            <div id = "tvSecondCol">
                            <RowsTV series={UpcomingTv.slice(2,4)}/>
                            </div>
                        </div>

                        <div className="tvSecondRow">
                            <div className="tv-column">
                                <div id = "tvSecondCol2">
                                <RowsTV series={UpcomingTv.slice(5,7)}/>     
                                </div>

                                <div className="info th-first" id="firstcol2">
                                <MostPopularTV series={UpcomingTv[1]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </section>
            </React.Fragment>
            );
        }
        else {return null;}
    }
}