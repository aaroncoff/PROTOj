import React, { Component } from 'react';
import spacex from './spacex.png';

export default class Spacex extends Component {
    render() {
        return(
            <div><img className="Spacex" src={spacex}  /></div>
        )
    }
}