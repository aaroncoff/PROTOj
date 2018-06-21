import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import CompProf from './Components/CompProf/CompProf';
import ProfProf from './Components/ProfProf/ProfProf';
import ProjDash from './Components/ProjDash/ProjDash';
import SponsProf from './Components/SponsProf/SponsProf';
import StudProfile from './Components/StudProfile/StudProfile';
import UnivProf from './Components/UnivProf/UnivProf';
import About from './Components/Info/About';
import Contact from './Components/Info/Contact';
import Help from './Components/Info/Help';
import SearchBar from './Components/SearchBar/SearchBar';
import Home from './Home';



const routes = (
    <Switch>
        <Route path='/compprof' component={CompProf} />
        <Route path='/profprof' component={ProfProf} />
        <Route path='/projdash' component={ProjDash} />
        <Route path='/sponsprof' component={SponsProf} />
        <Route path='/studprofile' component={StudProfile} />
        <Route path='/univprof' component={UnivProf} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Help' component={Help} />
        <Route exact path='/' component={Home} />
        
        
        {/* <Route exact path='/' render={() => {
            return <div></div>
        }}/> */}
    </Switch>
);

export default routes;