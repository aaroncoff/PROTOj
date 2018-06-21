import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CompProf from './Components/CompProf/CompProf.js';
// import ProfProf from './Components/ProfProf/ProfProf.js';
// import ProjDash from './Components/ProjDash/ProjDash.js';
// import SponsProf from './Components/SponsProf/SponsProf.js';
// import StudProfile from './Components/StudProfile/StudProfile.js';
// import UnivProf from './Components/UnivProf/UnivProf.js';




const Nav = () => {
    return <div className="navBar">
        <Link to="./CompProf" className="Comp"><button className ="btn1">Company</button></Link>
       
       
        <button className ="btn6"><Link to="./UnivProf" className="university">University</Link></button>
        {/* <button className = "btn1" onClick={() => this.nextPath('./CompProf/CompProf') }> Sign In As Company </button>
        <button className = "btn2" onClick={() => this.nextPath('./ProfProf/ProfProf') }> Sign In As Professor </button>
        <button className = "btn3" onClick={() => this.nextPath('./ProjDash/ProjDash') }> My Projects </button>
        <button className = "btn4" onClick={() => this.nextPath('./SponsProf/SponsProf') }> Sign In As Sponsor </button>
        <button className = "btn5" onClick={() => this.nextPath('./StudProfile/StudProfile') }> Sign In As Student </button>
        <button className = "btn6" onClick={() => this.nextPath('./UnivProf/UnivProf') }> Sign In As Administrator  </button> */}
    </div>
};

// export const Welcome = () => {
//     return <button className ="Welc"><Link to="./StudProfile" className="StudLink">Welcome</Link></button>
// }

// export function Welcome(props){
//     return <button className ="Welc" href="./StudProfile" className="StudLink">Welcome</button>
// }


export default Nav;