import React, { Component } from 'react';
import olympic from './olympic.png';

export default class Olympic extends Component {
    render() {
        return(
            <div><img className="Olympic" src={olympic}  /></div>
        )
    }
}