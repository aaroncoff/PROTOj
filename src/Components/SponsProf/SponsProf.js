import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SponsProf extends Component{
    render() {
        return (
            <div>
                Sponsor Profile
                <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button>
            </div>
        )
    }
}