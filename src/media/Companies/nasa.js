import React, { Component } from 'react';
import nasa from './nasa.png';

export default class Nasa extends Component {
    render() {
        return(
            <div><img className="Nasa" src={nasa}  /></div>
        )
    }
}