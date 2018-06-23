import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ProfesLogin from '../../LoginProfIndex';


export default class ProfLogin extends Component{
    constructor() {
        super();
        this.state = {
            professors: [],
        }
    }
    

    render() {
        return (
            <div>

                

                New Professor
                <h1>
                   <ProfesLogin/>
                </h1>
                {/* <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button> */}
            </div>
        )
    }
}
// ReactDOM.render(<StudProf/>, document.getElementById('studprof'));