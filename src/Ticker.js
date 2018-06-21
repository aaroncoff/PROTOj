import React, { Component } from 'react';
import Slider from 'react-slick';
import CompSlider from './slider';
import Uslider from './Uslider';
import './Ticker.css';
import './Uslider.css';



export default class Ticker extends Component{
    render() {
        return (
            <div className="ticker">

                <Uslider/>
                <CompSlider/>
               
            </div>
        )
    }
}