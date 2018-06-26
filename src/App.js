import React, { Component } from 'react';
// import './App.css';
import CompProf from './Components/CompProf/CompProf.js';
import ProfLogin from './Components/ProfLogin/ProfLogin.js';
import ProjDash from './Components/ProjDash/ProjDash';
import SponsProf from './Components/SponsProf/SponsLogin';
import StudLogin from './Components/StudLogin/StudLogin';
import UnivProf from './Components/UnivProf/UnivProf.js';
import routes from './routes';
import Nav from './Components/nav/nav';
import './Components/nav/nstyle.css';
import About from './Components/Info/About';
import Contact from './Components/Info/Contact';
import Help from './Components/Info/Help';
import { Link } from 'react-router-dom';
import Logo from './media/logo';
import Building from './media/building';
import SearchBar from './Components/SearchBar/SearchBar';
import Ticker from './Ticker';
import Home from './Home';

// import JumboSlider from './JumboSlider';
// import List from './Components/SearchWindow/Searchwindow';
// import Adobe from '.src/media/Companies/adobe.png';

// import Carousel from './carousel';



class App extends Component {
  render() {
    // const {term} = this.state
    return (
      
      <div>
        <div>
      
        <div className="info">
      <Link to="./About" className="About">About</Link>
      <Link to="./Contact" className="Contact">Contact</Link>
      <Link to="./Help" className="Help">Help</Link>
      <Link to="./studprof" className="myStudProf">My Profile</Link>
      </div>
      
      {/* <header className="header"> */}
{/*       
      <div className="pic-wrapper">
        <figure className="pic-1"></figure>
        <figure className="pic-2"></figure>
        <figure className="pic-3"></figure>
        <figure className="pic-4"></figure>
        
      </div> */}
       {/* <JumboSlider className='jumbo'/> */}
      {/* <Logo/>
      <SearchBar className="searchbar" searchFunc={(e) => this.filterNames(e)}/> */}
      {/* <List usernames={term}/> */}
      
      
      {/* </header> */}
    </div>
    <div>
    {/* <Ticker className="ticker"/>
       <div className="body">
       
        {/* <div className="keys"> */}
     
       {/* <Nav/> */}
       
       {/* </div> */}
       <div className='routes'>
         {routes}
      </div>

    
     </div>
    
      </div>

       

        
        
    
    );
  }
}

export default App;
