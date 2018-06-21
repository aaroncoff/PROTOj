import React, { Component } from 'react';
import marriott from './marriott.png';

export default class Marriott extends Component {
    render() {
        return(
            <div><img className="Marriott" src={marriott}  /></div>
        )
    }
}