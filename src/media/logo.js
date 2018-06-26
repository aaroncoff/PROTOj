import React, { Component } from 'react';
import logo from './logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div style={{background: 'green'}} ><img className="Logo" src={logo} onClick={()=> window.location.href = '/'} /></div>
        )
    }
}