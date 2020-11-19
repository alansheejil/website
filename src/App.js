//Styles
import './App.scss';

//Components
import Navigation from './Components/Navigation';
import Carousel from './Components/Carousel';
import RentalOffer from './Components/RentalOffer';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Carousel />
      <RentalOffer/>
      <AboutUs />
    </div>
  );
}

export default App;
