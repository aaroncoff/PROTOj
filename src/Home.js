import React, { Component } from 'react';

import './Greeting.css';
// import './App.css';
import Ticker from './Ticker';
// import './Ticker.css';
import Nav from './Components/nav/nav';
// import './Components/nav/nstyle.css';


export default class Home extends Component{
    render() {
        return (
            <div>
              
            <div className="greeting">
                Explore PROTOj
                <Nav/>
            </div>
          
            {/* <footer className='ticker'>
            <Ticker/>
            </footer> */}
            </div>
        )
    }
}