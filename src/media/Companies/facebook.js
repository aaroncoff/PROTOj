import React, { Component } from 'react';
import facebook from './facebook.png';

export default class Facebook extends Component {
    render() {
        return(
            <div><img className="Facebook" src={facebook}  /></div>
        )
    }
}