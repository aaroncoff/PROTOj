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
// import './Components/nav/nstyle.css';
// export default class Home extends Component{
//     render() {
//         return (
//             <div>
              
//             <div className="greeting">

            
//                 Explore PROTOj
//                 <Nav/>
//             </div>
          
            
//             </div>
//         )
//     }
// }

// // break

// import React, { Component } from 'react';

// import './Greeting.css';
// // import './App.css';
// import Ticker from './Ticker';
// // import './Ticker.css';
// import Nav from './Components/nav/nav';
// // import './Components/nav/nstyle.css';
// import Logo from './media/logo';
// import SearchBar from './Components/SearchBar/SearchBar';
// import { Link } from 'react-router-dom';


// export default class Home extends Component{
//     render() {
//         return (
//             <div>
//             <div className="Navigation">
            
           
            
            
//             <div className="info">
//           <Link to="./About" className="About">About</Link>
//           <Link to="./Contact" className="Contact">Contact</Link>
//           <Link to="./Help" className="Help">Help</Link>
//           </div>
          
//           <header className="header">
          
//           <div className="pic-wrapper">
//             <figure className="pic-1"></figure>
//             <figure className="pic-2"></figure>
//             <figure className="pic-3"></figure>
//             <figure className="pic-4"></figure>
            
//           </div>
//            {/* <JumboSlider className='jumbo'/> */}
//           <Logo/>
//           <SearchBar className="searchbar" searchFunc={(e) => this.filterNames(e)}/>
//           {/* <List usernames={term}/> */}
          
          
//           </header>
//         </div>
//         <div>
//         <Ticker className="ticker"/>
//            <div className="body">
           
//             {/* <div className="keys"> */}
         
//            {/* <Nav/> */}
           
//            {/* </div> */}
           
           
//           </div>
          
//          <footer>
        
//          </footer>
          
//          </div>
        
//           </div>
    
           
    
            
            
        
//         );
//       }
//     }

    // break

    class Home extends Component {
        render() {
          // const {term} = this.state
          return (
            
            <div>
              <div className="Navigation">
              
             
              
              
              {/* <div className="info">
            <Link to="./About" className="About">About</Link>
            <Link to="./Contact" className="Contact">Contact</Link>
            <Link to="./Help" className="Help">Help</Link>
            </div> */}
            
            <header className="header">
            
            <div className="pic-wrapper">
              <figure className="pic-1"></figure>
              <figure className="pic-2"></figure>
              <figure className="pic-3"></figure>
              <figure className="pic-4"></figure>
              <Logo/>
            <SearchBar className="searchbar" searchFunc={(e) => this.filterNames(e)}/>
            </div>
             {/* <JumboSlider className='jumbo'/> */}
            
            {/* <List usernames={term}/> */}
            
            
            </header>
          
          {/* <div> */}
         
             {/* <div className="body"> */}
             
              {/* <div className="keys"> */}
           
             {/* <Nav/> */}
             
             {/* </div> */}
            {/* <div className="greeting"> */}

            
            
            </div>
                <div>
                <Ticker className="ticker"/>
                    Explore PROTOj
                    <Nav/>
                </div>
            </div>
            // </div>
            
        //    <footer>
          
        //    </footer>
            
        //    </div>
          
            // </div>
      
             
      
              
              
          
          );
        }
      }
      
      export default Home;
      
    