import React, { Component } from 'react';
import Slider from 'react-slick';
import Company1 from './media/Jumbos/company1';
import Company2 from './media/Jumbos/company2';
import Company3 from './media/Jumbos/company3';
import Students1 from './media/Jumbos/students1';
import Students2 from './media/Jumbos/students2';
import Students3 from './media/Jumbos/students3';
import './Jumbo.css';

export default class Jumbo extends Component {
    render() {
      var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
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
     
        // var settings = {
        //   dots: false,
        //   infinite: true,
          
        //   slidesToShow: 1,
        //   useCSS: 1,
        //   fade: true,
        //   slidesToScroll: 1,
        //   autoplay: true,
        //   autoplaySpeed: 1500,
        //   arrows: false,
        //   draggable: false,
        //   rows: 1,
        //   slidesPerRow: 1,
        //   variableWidth: false,
        //   centerMode: true,
        //   rtl: true,
        //   responsive: [{
        //       breakpoint: 768,
        //       settings: {
        //           slidesToShow: 1
        //         }
        //     }, {
        //       breakpoint: 520,
        //       settings: {
        //         slidesToShow: 1
        //       }
        //     }]
        //   };
       




    return (
        <Slider {...settings}>

     
        <div>
          <Company1/>
        </div>
        <div>
        <Company2/>
        </div>
        
        <div>
          <Company3/>
        </div>
    
        <div>
          <Students1/>
        </div>
        <div>
          <Students2/>
        </div>

        <div>
        <Students3/>
        </div>
        
        
      </Slider>
    )
    }
}