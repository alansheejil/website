import React from 'react';

//Styles
import './Home.scss';

//Components
import Navigation from '../Components/Navigation';
import Carousel from '../Components/Carousel';
import PortfolioSlider from '../Components/PortfolioSlider';

//Certificate paths
import ISO9001 from '../Img/iso9001.jpg';
import ISO14001 from '../Img/iso14001.jpg';
import ISO18001 from '../Img/iso18001.jpg';

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
                    <h2>O nás</h2>
                    <h3>Company name</h3>
                    <div className="text">
                        <p>Naša spoločnosť bola založená v roku 2004. Od svojho vzniku sme realizovali desiatky stavebných projektov rôzneho charakteru. Cieľom všetkých našich činností je vždy plné uspokojenie požiadaviek a potrieb zákazníka.</p>

                        <a href="#">Zobraziť viac -</a>
                    </div>
                </div>

                <div className="certificates">
                    <h2>Certifikáty</h2>
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
                    <h2>Portfólio</h2>
                    <h3>Naše najnovšie práce</h3>

                    <PortfolioSlider />
                </div>
            </div>

            
        </div>
    )
}

export default Home;