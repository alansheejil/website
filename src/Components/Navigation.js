import React from 'react';

//React-router-dom
import {NavLink} from 'react-router-dom';

//Styles
import './Navigation.scss';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation(props){
    return(
        <nav>
            <div className="container">
                <div className="nav-items">
                    <div className="logo">
                        <h3>LOGO</h3>  
                    </div>

                    <div className="menu">
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">Domov</NavLink></li>
                            <li><NavLink to="/about" exact activeClassName="active">O nás</NavLink></li>
                            <li><NavLink to="/portfolio" exact activeClassName="active">Portfólio</NavLink></li>
                            <li><NavLink to="/contact" exact activeClassName="active">Kontakt</NavLink></li>
                        </ul>
                    </div>

                    <div className="language">
                        <FontAwesomeIcon className="globe" icon={faGlobe} />
                        <p>Slovensky</p>
                        <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
                    </div>

                    <div className="rental">
                        <NavLink to="/rental" activeClassName="activeRental">Prenájom stavebnej techniky</NavLink>
                    </div>
                    
                    <div className="mobile-menu-icon" onClick={()=>props.openMobileMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navigation;