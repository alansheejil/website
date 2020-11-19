import React from 'react';

//Styles
import './Navigation.scss';

function Navigation(){
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

        </nav>
    )
}

export default Navigation;