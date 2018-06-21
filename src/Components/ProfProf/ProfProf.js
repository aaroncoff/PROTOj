import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfProf extends Component{
    render() {
        return (
            <div>
                Professor Profile
                <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button>
            </div>
        )
    }
}