import React from 'react';

//Styles
import './Home.scss';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from '../Components/Carousel';
import PortfolioSlider from '../Components/PortfolioSlider';

//Certificate paths
import ISO9001 from '../Img/Certificates/iso9001.jpg';
import ISO14001 from '../Img/Certificates/iso14001.jpg';
import ISO18001 from '../Img/Certificates/iso18001.jpg';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';
import { NavLink } from 'react-router-dom';

function Home(){
    return(
        <div className="home">
            <Carousel />

            <div className="container">
                <div className="rentalOffer">
                    <p>Prenájom špičkovej techniky za super ceny</p>
                    <NavLink to="/rental">Prenajať</NavLink>
                </div>

                <div className="aboutUs">
                    <h2>O nás <Dots /></h2>

                    <div className="container-inner">
                        <h3>Company name</h3>
                        <div className="text">
                            <p>Naša spoločnosť bola založená v roku 2004. Od svojho vzniku sme realizovali desiatky stavebných projektov rôzneho charakteru. Cieľom všetkých našich činností je vždy plné uspokojenie požiadaviek a potrieb zákazníka.</p>

                            <div className="showMore">
                                <NavLink to="/about">Zobraziť viac <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <Square />
                </div>

                <div className="certificates">
                    <h2>Certifikáty <Dots /></h2>

                    <div className="container-inner">
                        <div className="card-container">
                            <div className="card">
                                <h3>ISO 9001</h3>
                                <p>Certifikát kvality</p>
                                <img src={ISO9001} alt="ISO9001 Certificate" />

                                <div className="box">
                                    <a href="#">Zistiť viac</a>

                                    <div className="showMore">
                                        <a href="#">Zobraziť certifikát <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
                                    </div>
                                </div>
    
                            </div>

                            <div className="card">
                                <h3>ISO 14001</h3>
                                <p>Certifikát enviromentu</p>
                                <img src={ISO14001} alt="ISO14001 Certificate" />

                                <div className="box">
                                    <a href="#">Zistiť viac</a>

                                    <div className="showMore">
                                        <a href="#">Zobraziť certifikát <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <h3>OHSAS 18001</h3>
                                <p>Certifikát bezpečnosti</p>
                                <img src={ISO18001} alt="ISO18001 Certificate" />

                                <div className="box">
                                    <a href="#">Zistiť viac</a>

                                    <div className="showMore">
                                        <a href="#">Zobraziť certifikát <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio">
                    <h2>Portfólio <Dots /></h2>

                    <div className="container-inner">
                        <h3>Naše najnovšie práce</h3>

                        <Square />
                        <PortfolioSlider />
                    </div>
                </div>
            </div>

            <div className="allWorks">
                <Circle />

                <div className="container">
                    <h3>Chcete vidieť všetky naše práce? </h3> 
                    <NavLink to="/portfolio">Zobraziť celé portfólio</NavLink>
                </div>        
            </div>

            <div className="contact">
                <div className="container">
                    <h2>Kontakt <Dots /></h2>

                    <div className="container-inner">
                        <div className="wrapper">
                            <div className="info">
                                <div className="heading">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <h4>Kde sme</h4>
                                </div>
                                <p>Kukučínova 533/28</p>
                                <p>927 01</p>
                                <p>Šaľa</p>
                                
                                <div className="heading">
                                    <FontAwesomeIcon icon={faPhoneAlt} /> 
                                    <h4>Kontakt</h4>
                                </div>
                                <p>0900 000 000</p>
                                <p>email@company.com</p>

                                <div className="heading">
                                    <FontAwesomeIcon icon={faClock} />
                                    <h4>Pracovná doba</h4>
                                </div>
                                <p>Pondelok - piatok</p>
                                <p>8:00 - 18:00</p>
                            </div>

                            <div className="form">
                                <form>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />

                                    <textarea placeholder="Message"></textarea>

                                    <div className="send">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        <a href="#">Odoslať</a>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>


                </div>

                <Square />
            </div>
        </div>
    )
}

export default Home;