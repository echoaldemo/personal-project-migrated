import React, { Component } from 'react';

export default class NextEpisode extends Component {
    render() {
        const { nextEp } = this.props;

        var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var airDate, nextOverview;
        if (nextEp === null){ airDate = "TBA"}
        else { var date = new Date(nextEp.air_date); airDate = date.toLocaleDateString("en-US", options); }

        if (nextEp == null){
                nextOverview = "No overview available.";
            return (
                <React.Fragment>
                <p>
                    <b>{airDate}</b><br/><br/>
                    <b className="blue">TBA</b><br/>
                    {nextOverview}
                </p>
                </React.Fragment>
            );
        }
        else {
            if (nextEp.overview === "") { nextOverview = 'No overview available'}
            else { nextOverview = nextEp.overview}
            return (
                <React.Fragment>
                <p>
                    <b>{airDate}</b><br/><br/>
                    <b className="blue">{nextEp.name}</b><br/>
                    {nextOverview}
                </p>
                </React.Fragment>
            );
        }
    }
}