import React from 'react';

//Styles
import './Contact.scss';

//React-router-dom
import { Link } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';

function Contact(){
    return(
        <div className="contactView">
            <div className="container">
                <div className="contactForm section">
                    <h2>Kontakt <Dots /></h2>
                    <Square />

                    <div className="container-inner">
                        <div className="wrapper">
                            <div className="info">
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <h4>Kde sme</h4>
                                    </div>
                                    <p>Kukučínova 533/28</p>
                                    <p>927 01</p>
                                    <p>Šaľa</p>
                                </div>
                                    
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faPhoneAlt} /> 
                                        <h4>Kontakt</h4>
                                    </div>
                                    <p>0900 000 000</p>
                                    <p>email@company.com</p>
                                </div>
                                
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faClock} />
                                        <h4>Pracovná doba</h4>
                                    </div>
                                    <p>Pondelok - piatok</p>
                                    <p>8:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="form">
                                <form>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />

                                    <textarea placeholder="Message"></textarea>

                                    <div className="send">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        <Link to="">Odoslať</Link>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rental section">
                    <div className="container-inner">
                        <h2>Prenájom techniky</h2>

                        <h1>+421 900 000 000</h1>
                        <p>email@company.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;