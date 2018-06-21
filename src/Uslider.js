import React, { Component } from 'react';
import Slider from 'react-slick';
import './Uslider.css';
import Byu from './media/Universities/byu';
import Byuh from './media/Universities/byuh';
import Flstate from './media/Universities/flstate';
import Georgiastate from './media/Universities/georgiastate';
import Indiana from './media/Universities/indiana';
import Manoa from './media/Universities/manoa';
import Michiganstate from './media/Universities/michiganstate';
import Notredame from './media/Universities/notredame';
import Stanford from './media/Universities/stanford';
import Tennessee from './media/Universities/tennessee';
import Unc from './media/Universities/unc';
import Weber from './media/Universities/weber';

export default class Uslider extends Component {
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
          rtl: true,
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
          <Byu/>
        </div>
        <div>
        <Tennessee/>
        </div>
        
        <div>
          <Flstate/>
        </div>
    
        <div>
          <Georgiastate/>
        </div>
        <div>
          <Indiana/>
        </div>

        <div>
        <Weber/>
        </div>
        <div>
            <Notredame/>
        </div>
        <div>
            <Stanford/>
        </div>
        
        <div>
            <Byuh/>
        </div>
        
        <div>
            <Unc/>
        </div>

        <div>
            <Manoa/>
        </div>
        
        <div>
            <Michiganstate/>
        </div>
        
      </Slider>
    )
    }
}