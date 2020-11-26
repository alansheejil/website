import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
import SliderImage from '../Img/Slider-Rental/rental.jpg';

//Arrows
import Next from '../Icons/Next';
import Prev from '../Icons/Prev';

//Styles
import './RentalSlider.scss'

function RentalSlider(){
    const ArrowLeft = (props) => (
        <a {...props} className={'prev'}><Prev /></a>
    );
    const ArrowRight = (props) => (
        <a {...props} className={'next'}><Next /></a>
    );

    const settings ={
        dots:false,
        arrows:true,
        prevArrow:<ArrowLeft />,
        nextArrow:<ArrowRight />,
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1
    }

    return(
        <div className="rentalSlider">
            <Slider {...settings}>
                <div className="slide">
                    <img src={SliderImage} />
                </div>

                <div className="slide">
                    <img src={SliderImage} />
                </div>         
            </Slider>
        </div>
    )
}

export default RentalSlider;