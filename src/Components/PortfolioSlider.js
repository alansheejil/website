import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
import SliderImage from '../Img/Slider-Home/excavator.jpg';

//Arrows
import Next from '../Icons/Next';
import Prev from '../Icons/Prev';

//Styles
import './PortfolioSlider.scss'

function PortfolioSlider(){

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
        slidesToShow:3,
        slidesToScroll:3,
        variableWidth:true,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint:800,
              settings: {
                slidesToShow:1,
                slidesToScroll:1,
                variableWidth:false
              }
            }
          ]
    }

    return(
        <div className="portfolioSlider">
            <Slider {...settings}>
                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div>

                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="portfolio-example" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#sa">Zobraziť viac</a>
                    </div>  
                </div> 
                
            </Slider>
        </div>
    )
}

export default PortfolioSlider;