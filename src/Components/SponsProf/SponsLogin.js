import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SponsorLogin from '../../LoginSponsIndex';

export default class SponsLogin extends Component{
    constructor(){
        super();
        this.state = {
            sponsors: [],
        }
    }


    render() {
        return (
            <div>
                New Sponsor
                <h1>
                    <SponsorLogin/>
                </h1>
               
            </div>
        )
    }
}