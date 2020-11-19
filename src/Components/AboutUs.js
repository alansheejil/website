import React from 'react';

//Styles 
import './AboutUs.scss';

//Icon
import Square from '../Icons/Square';

function AboutUs(){
    return(
        <div className="aboutUs">
            <div className="container">
                <h2>O nás</h2>
                <h3>Company name</h3>
                <div className="text">
                    <p>Naša spoločnosť bola založená v roku 2004. Od svojho vzniku sme realizovali desiatky stavebných projektov rôzneho charakteru. Cieľom všetkých našich činností je vždy plné uspokojenie požiadaviek a potrieb zákazníka.</p>

                    <a href="#">Zobraziť viac -</a>
                </div>

                
            </div>
        </div>
    )
}

export default AboutUs;