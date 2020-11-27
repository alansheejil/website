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
     //Custom arrows
     const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
          id="prevSlide"
        >
          <Prev />
        </button>
      );

      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
          id="nextSlide"
        >
          <Next />
        </button>
      );

    const settings ={
        dots:false,
        arrows:true,
        prevArrow:<SlickArrowLeft />,
        nextArrow:<SlickArrowRight />,
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1
    }

    return(
        <div className="rentalSlider">
            <Slider {...settings}>
                <div className="slide">
                    <img src={SliderImage} alt="rental-example" />
                </div>

                <div className="slide">
                    <img src={SliderImage} alt="rental-example" />
                </div>         
            </Slider>
        </div>
    )
}

export default RentalSlider;