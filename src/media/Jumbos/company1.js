import React, { Component } from 'react';
import company1 from './company1.jpg';

export default class Company1 extends Component {
    render() {
        return(
            <div><img className="Company1" src={company1}  /></div>
        )
    }
}