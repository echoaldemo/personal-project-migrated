import React, { Component } from 'react';

export default class Season extends Component {
    render() {
        const { title, network, seasons } = this.props;

        var season = seasons.filter(e => e.name !== 'Specials').reverse();
        return (
            <React.Fragment>
            {season.map(e => (
            <div className="season" key={e.id}>
                <img className="season-poster" src={'https://image.tmdb.org/t/p/w780/' + e.poster_path} alt="" />
                <p className="pad">{title} <b>{e.name}</b><br/><br/>
                {e.overview === "" || e.overview === null
                ? "No overview available"
                : e.overview}<br/><br/>
                    Released: <b>{e.air_date.split('-')[0]}</b>, {network}
                </p>
            </div>
            ))}
            </React.Fragment>
        );
    }
}