import React from 'react';

//React-router-dom
import {NavLink} from 'react-router-dom';

//Styles
import './MobileNavigation.scss';

function MobileNavigation(props){
    return(
        <div className="mobileMenu">
            <div className="container">
                <h4>Company name</h4>

                <ul>
                    <li><NavLink to="/" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>Domov</NavLink></li>
                    <li><NavLink to="/about" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>O nás</NavLink></li>
                    <li><NavLink to="/portfolio" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>Portfólio</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>Kontakt</NavLink></li>
                    <li><NavLink to="/rental" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>Prenájom</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default MobileNavigation;