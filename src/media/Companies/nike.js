import React, { Component } from 'react';
import nike from './nike.png';

export default class Nike extends Component {
    render() {
        return(
            <div><img className="Nike" src={nike}  /></div>
        )
    }
}