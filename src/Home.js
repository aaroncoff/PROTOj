import React, { Component } from 'react';

import './Greeting.css';
// import './App.css';
import Ticker from './Ticker';
// import './Ticker.css';
import Nav from './Components/nav/nav';
// import './Components/nav/nstyle.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Logo from './media/logo';
import { Link } from 'react-router-dom';
import routes from './routes';


    class Home extends Component {
        render() {
          return (
            
            <div>
                 <Logo/>
              <div className="Navigation">
              <SearchBar className="searchbar" searchFunc={(e) => this.filterNames(e)}/>
            <header className="header">
            
            <div className="pic-wrapper">
              <figure className="pic-1"></figure>
              <figure className="pic-2"></figure>
              <figure className="pic-3"></figure>
              <figure className="pic-4"></figure>
           
            
            </div>
        
            </header>

            </div>
                <div>
                <Ticker className="ticker"/>
                    Explore PROTOj
                    <Nav/>
                </div>
            </div>
       
          );
        }
      }
      
      export default Home;
      
    