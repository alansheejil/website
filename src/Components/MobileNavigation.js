import React from 'react';

//React-router-dom
import {NavLink} from 'react-router-dom';

//Styles
import './MobileNavigation.scss';

function MobileNavigation(props){
    //On click closes menu and scroll to top of the page
    function closeMenuAndScroll(){
        props.closeMobileMenu();
        window.scrollTo(0,0);
    }

    return(
        <div className="mobileMenu">
            <div className="container">
                <h4>Company name</h4>

                <ul>
                    <li><NavLink to="/" exact activeClassName="active" onClick={closeMenuAndScroll}>Domov</NavLink></li>
                    <li><NavLink to="/about" exact activeClassName="active" onClick={closeMenuAndScroll}>O nás</NavLink></li>
                    <li><NavLink to="/portfolio" exact activeClassName="active" onClick={closeMenuAndScroll}>Portfólio</NavLink></li>
                    <li><NavLink to="/contact" exact activeClassName="active" onClick={closeMenuAndScroll}>Kontakt</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default MobileNavigation;