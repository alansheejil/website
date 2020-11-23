import React from 'react';

//Styles
import './Home.scss';

//Components
import Navigation from '../Components/Navigation';
import Carousel from '../Components/Carousel';
import PortfolioSlider from '../Components/PortfolioSlider';
import Footer from '../Components/Footer';

//Certificate paths
import ISO9001 from '../Img/iso9001.jpg';
import ISO14001 from '../Img/iso14001.jpg';
import ISO18001 from '../Img/iso18001.jpg';

//Icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';

function Home(){
    return(
        <div className="home">
            <Navigation />
            <Carousel />

            <div className="container">
                <div className="rentalOffer">
                    <p>Prenájom špičkovej techniky za super ceny</p>
                    <a href="#">Prenajať</a>
                </div>

                <div className="aboutUs">
                    <h2>O nás <Dots /></h2>
                    <h3>Company name</h3>
                    <div className="text">
                        <p>Naša spoločnosť bola založená v roku 2004. Od svojho vzniku sme realizovali desiatky stavebných projektov rôzneho charakteru. Cieľom všetkých našich činností je vždy plné uspokojenie požiadaviek a potrieb zákazníka.</p>

                        <a href="#">Zobraziť viac -</a>
                    </div>

                    <Square />
                </div>

                <div className="certificates">
                    <h2>Certifikáty <Dots /></h2>
                    <div className="card-container">
                        <div className="card">
                            <h3>ISO 9001</h3>
                            <p>Certifikát kvality</p>
                            <img src={ISO9001} alt="ISO9001 Certificate" />

                            <a href="#">Zistiť viac</a>
                            <a href="#">Zobrazit certifikát -</a>
                        </div>

                        <div className="card">
                            <h3>ISO 14001</h3>
                            <p>Certifikát enviromentu</p>
                            <img src={ISO14001} alt="ISO14001 Certificate" />

                            <a href="#">Zistiť viac</a>
                            <a href="#">Zobrazit certifikát -</a>
                        </div>

                        <div className="card">
                            <h3>OHSAS 18001</h3>
                            <p>Certifikát bezpečnosti</p>
                            <img src={ISO18001} alt="ISO18001 Certificate" />

                            <a href="#">Zistiť viac</a>
                            <a href="#">Zobrazit certifikát -</a>
                        </div>
                    </div>
                </div>

                <div className="portfolio">
                    <h2>Portfólio <Dots /></h2>
                    <h3>Naše najnovšie práce</h3>

                    <Square />
                    <PortfolioSlider />
                </div>
            </div>

            <div className="allWorks">
                <Circle />

                <div className="container">
                    <h3>Chcete vidieť všetky naše práce? </h3> 
                    <a href="#">Zobraziť celé portfólio</a>  
                </div>        
            </div>

            <div className="contact">
                <div className="container">
                    <h2>Kontakt <Dots /></h2>

                    <div className="wrapper">
                        <div className="info">
                            <h4>Kde sme</h4>
                            <p>Kukučínova 533/28</p>
                            <p>927 01</p>
                            <p>Šaľa</p>

                            <h4>Kontakt</h4>
                            <p>0900 000 000</p>
                            <p>email@company.com</p>

                            <h4>Pracovná doba</h4>
                            <p>Pondelok - piatok</p>
                            <p>8:00 - 18:00</p>
                        </div>

                        <div className="form">
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />

                                <textarea placeholder="Message"></textarea>

                                <input type="submit" value="Odoslať" />
                            </form>
                        </div>
                    </div>
                </div>

                <Square />
            </div>

            <Footer />

        </div>
    )
}

export default Home;