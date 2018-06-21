import React, { Component } from 'react';
import stanford from './stanford.png';

export default class Stanford extends Component {
    render() {
        return(
            <div><img className="Stanford" src={stanford}  /></div>
        )
    }
}