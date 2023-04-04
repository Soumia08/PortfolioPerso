import React from 'react';
import About from './Assests/PortfolioContainer/About/About.js';
import Contact from './Assests/PortfolioContainer/Contact/Contact.js';
import FooterB from './Assests/PortfolioContainer/Footer/FooterB.js';
import Home from './Assests/PortfolioContainer/Home/Home.js'
import Nav from './Assests/PortfolioContainer/Nav/Nav.js';
import Realisation from './Assests/PortfolioContainer/Realisations/Realisation.js';
import Resume from './Assests/PortfolioContainer/Resume/Resume.js';

function App() {
  return (

    <div> 
    
    <div className="App">
     <Home/>
     {/* <Nav/> */}
     <About/>
     <Resume/> 
     <Realisation/>
   
     <Contact />
    
      <FooterB/>
    </div>
    </div>
  );
}

export default App;
