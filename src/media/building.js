import React, { Component } from 'react';
import building from './OfficeBuilding.jpg';

export default class Building extends Component {
    render() {
        return(
            <div><img className="Building" src={building} /></div>
        )
    }
}