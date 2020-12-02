import React, { useState } from 'react';

//React-router
import {BrowserRouter as Router, Route} from 'react-router-dom';

//React-transition-group
import {CSSTransition} from 'react-transition-group';

//Styles
import './App.scss';

//Components
import Navigation from './Components/Navigation';
import MobileNavigation from './Components/MobileNavigation';
import Footer from './Components/Footer';

//Views
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Portfolio from './Views/Portfolio';
import Rental from './Views/Rental';

//Icons
import BackToTop from './Icons/BackToTop';

function App(){
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop,setShowScrollToTop] = useState(false);

  //Detect position from top and show/hide scroll to top button
  function showScrollToTopIcon(){
    let positionY;
    window.addEventListener('scroll',function(){
      positionY = this.scrollY;

      if(positionY > 200){
        setShowScrollToTop(true);
      }else{
        setShowScrollToTop(false);
      }
    });
  }

  return (
    <Router>
        <div className="App">
          <div className="wrapper">
            {showScrollToTopIcon()}

            <CSSTransition
              in={isMobileMenuOpen}
              classNames="mobile-navigation"
              timeout={300}
              unmountOnExit
            >
              <div className="mobile-menu-wrapper">
                <MobileNavigation closeMobileMenu={()=>setIsMobileMenuOpen(false)}  />
              </div>
            </CSSTransition>

            <CSSTransition
              in={isMobileMenuOpen}
              classNames="mobile-navigation-overlay"
              timeout={300}
              unmountOnExit
            >
              <div className="mobile-menu-overlay" onClick={()=> setIsMobileMenuOpen(false)}></div>
            </CSSTransition>

            <CSSTransition
              in={showScrollToTop}
              classNames="showScrollToTop"
              timeout={300}
              unmountOnExit
            >
              <div className="scrollToTop" onClick={()=>window.scrollTo(0,0)}>
                <BackToTop />
              </div>
            </CSSTransition>

            <Navigation openMobileMenu={()=>setIsMobileMenuOpen(true)} />

            <Route key="/" exact path="/">
                {({match})=>(
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="slide-backward"
                    unmountOnExit
                    >
                      <div className="page">
                        <Home />
                      </div>

                  </CSSTransition>
                )}
            </Route>

            <Route key="/about" exact path="/about">
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                        <div className="page">
                          <About />
                        </div>

                    </CSSTransition>
                  )}
            </Route>

            <Route key="/contact" exact path="/contact">
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                        <div className="page">
                          <Contact />
                        </div>

                    </CSSTransition>
                  )}
            </Route>

            <Route key="/portfolio" exact path="/portfolio">
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                        <div className="page">
                          <Portfolio />
                        </div>

                    </CSSTransition>
                  )}
            </Route>

            <Route key="/rental" exact path="/rental">
                  {({match})=>(
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="slide-forward"
                      unmountOnExit
                      >
                        <div className="page">
                          <Rental />
                        </div>

                    </CSSTransition>
                  )}
            </Route>

            <Footer />
          </div>
        </div>


    </Router>
  );
}

export default App;
