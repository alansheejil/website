import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
import SliderImage from '../Img/Slider-Portfolio/bridge.jpg';

//Arrows
import Next from '../Icons/Next';
import Prev from '../Icons/Prev';

//Styles
import './PortfolioItemSlider.scss'

function PortfolioItemSlider(){
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
        slidesToShow:3,
        slidesToScroll:1,

    }

    return(
        <div className="portfolioItemSlider">
            <Slider {...settings}>
                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                    
                </div>

                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                </div>

                
                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                </div>

                
                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                </div>

                
                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                </div>

                
                <div className="slide">
                    <div className="image">
                        <img src={SliderImage} alt="slider-image" /> 
                    </div>
                </div> 
                
            </Slider>
        </div>
    )
}

export default PortfolioItemSlider;