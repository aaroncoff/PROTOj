import React, { Component } from 'react';
import boeing from './boeing.png';

export default class Boeing extends Component {
    render() {
        return(
            <div><img className="Boeing" src={boeing}  /></div>
        )
    }
}