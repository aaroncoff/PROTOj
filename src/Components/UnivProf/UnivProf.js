import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
// import Welcome from './'

export default class UnivProf extends Component{
    render() {
        // const user = prompt("username","password");
        // if (person === null || person == ""){
        //     txt = "Please enter a valid username & password";
        // } else {
        //     <Welcome/>
        // }
        return (
            

            <div>
                University Profile
                
                <button className ="btn5" ><Link to="./StudProfile" className="student">Sign In As Student</Link></button>

                <button className ="btn2"><Link to="./ProfProf" className="Prof">Sign In As Professor</Link></button>
            </div>
        )
    }
}