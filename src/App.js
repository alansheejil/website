import React from 'react';

//React-router
import {BrowserRouter as Router, Route} from 'react-router-dom';

//React-transition-group
import {CSSTransition} from 'react-transition-group';

//Styles
import './App.scss';

//Components
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

//Views
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="wrapper">
          <Navigation />
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
            <Footer />
          </div>
        </div>


    </Router>
  );
}

export default App;
