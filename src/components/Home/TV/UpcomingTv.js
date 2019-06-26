import React, { Component } from 'react';

import MostPopular from './TV/MostPopular';
import Rows from './TV/Rows';

export default class NowPlaying extends Component {
  
  render() {
    const { series } = this.props;
    const row1 = series.slice(2,4);
    const row2 = series.slice(5, 7);
    return (
        <React.Fragment>
            <div className="type header">
                <label>UPCOMING TV SHOWS</label>
            </div>

            <div className="tv" id="main">
                <div className="tv-column">
                    <div className="info th-first" id="tvfirstcol">
                        <MostPopular series={series[0]} />
                    </div>
                    
                    <div id = "tvSecondCol">
                        <Rows series={row1}/>
                    </div>
                </div>

                <div className="tvSecondRow">
                    <div className="tv-column">
                        <div id = "tvSecondCol2">
                        <Rows series={row2}/>     
                        </div>

                        <div className="info th-first" id="firstcol2">
                        <MostPopular series={series[1]} />
                        </div>
                    </div>
                </div>
            

            </div>
            
        </React.Fragment>
    );
  }
}