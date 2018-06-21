import React, { Component } from 'react';
import coke from './coke.png';

export default class Coke extends Component {
    render() {
        return(
            <div><img className="Coke" src={coke}  /></div>
        )
    }
}