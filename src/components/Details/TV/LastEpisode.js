import React, { Component } from 'react';

export default class LastEpisode extends Component {
    render() {
        const { lastEp } = this.props;

        var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date = new Date(lastEp.air_date);
        var airDate = date.toLocaleDateString("en-US", options);

        var lastOverview;
        if (lastEp.overview === "" || lastEp.overview === null) {lastOverview = "No overview available"}
        else {lastOverview = lastEp.overview}

        return (
            <React.Fragment>
                <img className="still" src={
                    lastEp.still_path === null
                    ? 'https://reservation.asiwebres.com/v4/app_themes/images/noimage.png'
                    : 'https://image.tmdb.org/t/p/original/' + lastEp.still_path
                    } alt="" />
                <p className="recent">Aired <b>{airDate}</b><br/><br/>
                <b className="blue">{lastEp.name}</b><br/>
                {lastOverview}
                </p>
            </React.Fragment>
        );
    }
}