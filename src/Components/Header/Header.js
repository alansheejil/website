import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageUrl1 from '../../Img/1.jpg';
import imageUrl2 from '../../Img/2.jpg';

import Slider from "react-slick";

//Styles
import './Header.scss';

function Header(){
    const ArrowLeft = (props) => (
        <a {...props} className={'prev'}>prev</a>
    );
    const ArrowRight = (props) => (
        <a {...props} className={'next'}>next</a>
    );

    const settings ={
        dots:true,
        arrows:true,
        prevArrow:<ArrowLeft />,
        nextArrow:<ArrowRight />
    }
    return(
        <nav>
            <div className="container">
                <div className="nav-items">
                    <div className="logo">
                        <h3>LOGO</h3>
                    </div>

                    <div className="menu">
                        <ul>
                            <li className="active"><a href="#">Domov</a></li>
                            <li><a href="#">O nás</a></li>
                            <li><a href="#">Portfólio</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                    </div>

                    <div className="language">
                        <p>Slovensky</p>
                    </div>

                    <div className="rental">
                        <a href="#">Prenájom stavebnej techniky</a>
                    </div>
                </div>
            </div>

            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={imageUrl1} width="100%" height="700px"  />
                    </div>
                    
                    <div>
                        <img src={imageUrl2} width="100%" height="700px"  />
                    </div>
                    
                </Slider>
            </div>
            

        </nav>
    )
}

export default Header;