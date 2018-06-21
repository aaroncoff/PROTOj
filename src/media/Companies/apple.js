import React, { Component } from 'react';
import apple from './apple.png';

export default class Apple extends Component {
    render() {
        return(
            <div><img className="Apple" src={apple}  /></div>
        )
    }
}