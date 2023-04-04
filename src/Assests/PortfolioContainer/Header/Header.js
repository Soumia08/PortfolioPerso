import React, { useState } from "react";
import logo from "../../../Pictures/logo_transparent.png";
import { Divide as Hamburger } from 'hamburger-react'

import "./Header.css";


export default function Header() {


  const [isOpen, setIsOpen] = useState(false);
  const [activateNav, setActivateNav] = useState('');

 

  return (
    <div className="header-container"> 
    <div className="header-pc">

            <div className="header-menu">
            <ul className="permalinks">
            <li className="img-item">   <img src={logo} style={{ width: 200 }} alt="me logo" /> </li>
                

              <li className="nav-item">
                <a href="#" onClick={() => setActivateNav('#')} className={activateNav === '#' ? 'active' : '' }> Home </a>
              </li>
              <li className="nav-item">
              <a href="#about"  onClick={() => setActivateNav('#about')} className={activateNav === '#about' ? 'active' : '' }>  About  </a>
              </li>
              <li className="nav-item">
              <a href="#resume" onClick={() => setActivateNav('#resume')} className={activateNav === '#resume' ? 'active' : '' }>  Resume  </a>
              </li>

              <li className="nav-item">
                <a href="#realisations" onClick={() => setActivateNav('#realisations')} className={activateNav === '#realisations' ? 'active' : '' }>  Projects  </a>
              </li>
              <li className="nav-item">
              <a href="#contact" onClick={() => setActivateNav('#contact')} className={activateNav === '#contact' ? 'active' : '' }> Contact  </a>
              </li>
            </ul>


            </div>

 </div>
 <div className="header-phone"> 
    <div className="burger"> 
       <Hamburger toggled={isOpen} toggle={setIsOpen} />
       
       </div>
       <img src={logo} style={{ width: 200 }} alt="me logo" /> 
       {isOpen && 
      <div className="header-menu">
        <ul className="permalinks">
   
            
        
          <li className="nav-item">
            <a href="#" onClick={() => setActivateNav('#')} className={activateNav === '#' ? 'active' : '' }> Home </a>
          </li>
          <li className="nav-item">
          <a href="#about"  onClick={() => setActivateNav('#about')} className={activateNav === '#about' ? 'active' : '' }>  About  </a>
          </li>
          <li className="nav-item">
          <a href="#resume" onClick={() => setActivateNav('#resume')} className={activateNav === '#resume' ? 'active' : '' }>  Resume  </a>
          </li>

          <li className="nav-item">
            <a href="#realisations" onClick={() => setActivateNav('#realisations')} className={activateNav === '#realisations' ? 'active' : '' }>  Projects  </a>
          </li>
          <li className="nav-item">
          <a href="#contact" onClick={() => setActivateNav('#contact')} className={activateNav === '#contact' ? 'active' : '' }> Contact  </a>
          </li>
        </ul>
        
        
      </div>
    }
     </div>
      </div>
   
  );
}
