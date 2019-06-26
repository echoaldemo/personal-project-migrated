import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Details from './components/Details';
import Search from './components/Search'


export default function Routes() {																																																																																																																																																																																																																																																
    return (
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/details/:id" component={Details} />
           <Route path="/search/query=:string" component={Search} />
        </Switch>
    )
}