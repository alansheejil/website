import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageUrl1 from '../Img/1.jpg';
import imageUrl2 from '../Img/2.jpg';

import Slider from "react-slick";

//Styles
import './Carousel.scss'

function Carousel(){
    const ArrowLeft = (props) => (
        <a {...props} className={'prev'}>prev</a>
    );
    const ArrowRight = (props) => (
        <a {...props} className={'next'}>next</a>
    );

    const settings ={
        dots:true,
        arrows:false,
        prevArrow:<ArrowLeft />,
        nextArrow:<ArrowRight />,
        autoplay:true
    }
    return(
        <div className="slider">
            <Slider {...settings}>
                <div className="slide-1">
                    <div className="text">
                        <p>Lorem ipsum dolor simet.</p>
                        <h1>Some text</h1>
                    </div>  
                </div>
                
                <div className="slide-2">
                    <div className="text">
                        <p>Lorem ipsum dolor simet.</p>
                        <h1>Some other text</h1>
                    </div>  
                </div>
                
            </Slider>
        </div>
    )
}

export default Carousel;