import React, { Component } from 'react';
import Slider from 'react-slick';
import Jumbo from './Jumbo';
import './Jumbo.css';




export default class JumboSlider extends Component{
    render() {
        return (
            <div className="jumbo">

                <Jumbo/>
                
               
            </div>
        )
    }
}