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
        slidesToScroll:3,
        variableWidth:true,
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
    }

    return(
        <div className="portfolioSlider">
            <Slider {...settings}>
                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div>

                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div>

                
                <div className="slide">
                    <img src={SliderImage} alt="slider-image" />
                    <div className="text">
                        <p>Výstavba</p>
                        <h4>Some construction</h4>

                        <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>

                        <a href="#">Zobraziť viac</a>
                    </div>  
                </div> 
                
            </Slider>
        </div>
    )
}

export default PortfolioSlider;