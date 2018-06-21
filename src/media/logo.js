import React, { Component } from 'react';
import logo from './logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div><img className="Logo" src={logo} onClick={()=> window.location.href = '/'} /></div>
        )
    }
}