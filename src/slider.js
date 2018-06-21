import React, { Component } from 'react';
import Slider from 'react-slick';
import Adobe from './media/Companies/adobe';
import Apple from './media/Companies/apple';
import Boeing from './media/Companies/boeing';
import Cnn from './media/Companies/cnn';
import Coke from './media/Companies/coke';
import Delta from './media/Companies/delta';
import Facebook from './media/Companies/facebook';
import Google from './media/Companies/google';
import Marriott from './media/Companies/marriott';
import Microsoft from './media/Companies/microsoft';
import Mlb from './media/Companies/MLB';
import Nasa from './media/Companies/nasa';
import Nike from './media/Companies/nike';
import Olympic from './media/Companies/olympic';
import Spacex from './media/Companies/spacex';
import State_dept from './media/Companies/state_dept';
// import './Ticker.css';


export default class CompSlider extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          draggable: false,
          rows: 1,
          slidesPerRow: 1,
          variableWidth: false,
          centerMode: true,
          responsive: [{
              breakpoint: 768,
              settings: {
                  slidesToShow: 4
                }
            }, {
              breakpoint: 520,
              settings: {
                slidesToShow: 3
              }
            }]
          };
       




    return (
        <Slider {...settings}>

     
        <div>
          <Adobe/>
        </div>
        <div>
          <Apple/>
        </div>
        
        <div>
          <Coke/>
        </div>
    
        <div>
          <Facebook/>
        </div>
        <div>
          <Google/>
        </div>
        <div>
            <Marriott/>
        </div>
        <div>
          <Cnn/>
        </div>
        <div>
            <State_dept/>
        </div>
        <div>
            <Nike/>
        </div>
        
        <div>
            <Nasa/>
        </div>
        
        <div>
            <Olympic/>
        </div>
        
        <div>
        <Microsoft/>
            
        </div>
        
      </Slider>
    )
    }
}