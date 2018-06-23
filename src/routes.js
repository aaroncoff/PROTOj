import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import CompProf from './Components/CompProf/CompProf';
import ProfLogin from './Components/ProfLogin/ProfLogin';
import ProjDash from './Components/ProjDash/ProjDash';
import CreateProj from './Components/ProjDash/CreateProj';
import SponsProf from './Components/SponsProf/SponsProf';
import SponsLogin from './Components/SponsProf/SponsLogin';
import StudLogin from './Components/StudLogin/StudLogin';
import UnivProf from './Components/UnivProf/UnivProf';
import About from './Components/Info/About';
import Contact from './Components/Info/Contact';
import Help from './Components/Info/Help';
import SearchBar from './Components/SearchBar/SearchBar';
import Home from './Home';
import ProfProf from './Components/ProfLogin/ProfProf';
import StudProf from './Components/StudLogin/StudProf';



const routes = (
    <Switch>
        <Route path='/studprof' component={StudProf} />
        <Route path='/profprof' component={ProfProf} />
        <Route path='/compprof' component={CompProf} />
        <Route path='/proflogin' component={ProfLogin} />
        <Route path='/projdash' component={ProjDash} />
        <Route path='/createproj' component={CreateProj} />
        <Route path='/sponsprof' component={SponsProf} />
        <Route path='/sponslogin' component={SponsLogin} />
        <Route path='/studlogin' component={StudLogin} />
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