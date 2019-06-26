import React, { Component } from 'react';
import LastEpisode from './LastEpisode';
import NextEpisode from './NextEpisode';
import Season from './Season';

export default class DataTV extends Component {

    render() {
        const { series } = this.props;
       
        let cast = series.credits.cast.map(element => {
            return element.name;    
        }).slice(0,10).join(', ');

        let createdBy = series.created_by.map(e =>{
            return e.name;
        }).join(', ');

        return (
            <React.Fragment>
            <div>
                <h2 className="panel-heading">Series Info</h2>
                <div className="hr">
                    <span className="hr-title">{series.name}</span>
                </div>
            </div>
            <div>
                <p className="overview deets">{series.overview}</p>
                <p className="creator deets">Created by: <b>{createdBy}</b></p>
                <p className="cast deets">
                    Cast: <b>{cast}</b>
                </p>

                <div className="episode">
                    <div className="mostRecent">
                        <h2 className="recent">MOST RECENT EPISODE</h2>
                        <div className="grid" id="mostRecent">
                            <LastEpisode lastEp={series.last_episode_to_air} />             
                        </div>  
                    </div>
                    <div className="nextEpisode">
                        <h2 className="recent">NEXT EPISODE</h2>
                        <div id="nextEpisode">
                            <NextEpisode nextEp={series.next_episode_to_air} />          
                        </div>
                    </div>
                </div>

                <h2 className="panel-heading">Seasons</h2>

                <div id="seasons">
                    <Season title={series.name} network={series.networks[0].name} seasons={series.seasons} />
                </div>

            </div>
            </React.Fragment>
        );
      }
}
