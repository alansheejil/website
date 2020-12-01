import React from 'react';

//Styles
import './Footer.scss';

//Icons
import BackToTop from '../Icons/BackToTop';

function Footer(){

    //Scroll back to top
    function scrollToTop(){
        window.scrollTo(0,0);
    }
    return(
        <div className="footer">
            <div className="container">
                <div className="container-inner">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21293.917988859735!2d17.859605039550782!3d48.153822399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssk!2ssk!4v1605897055710!5m2!1ssk!2ssk" width="80%" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                    <div className="column-wrapper">
                        <div className="column">
                            <h5>Navigácia</h5>
                            <a href="#s">Domov</a>
                            <a href="#s">O nás</a>
                            <a href="#s">Portfólio</a>
                            <a href="#s">Kontakt</a>
                        </div>

                        <div className="column">
                            <h5>Kontakt</h5>
                            <a href="#s">0900 000 000</a>
                            <a href="#s">email@company.com</a>
                        </div>

                        <div className="column">
                            <h5>Prenájom techniky</h5>
                            <a href="#s">0900 000 000</a>
                            <a href="#s">email@company.com</a>
                        </div>

                        <div className="column">
                            <h5>Adresa</h5>
                            <p>Kukučínova 533/28</p>
                            <p>927 01</p>
                            <p>Šaľa</p>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>&copy; Company name</p>

                        <div className="back-to-top">
                            <BackToTop scrollToTop={scrollToTop} />
                            <p onClick={scrollToTop}>Späť na vrch</p> 
                        </div>   
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Footer;