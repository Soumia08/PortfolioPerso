import React from 'react'
import './Nav.css'
import {ImHome} from 'react-icons/im'
import {SiAboutdotme} from 'react-icons/si';
import {MdOutlineWork} from 'react-icons/md';
import {MdContactPage} from 'react-icons/md';
import {GiStairsGoal} from "react-icons/gi"
import { useState } from 'react'




const Nav = () => {

  const [activateNav, setActivateNav] = useState('#');
  const style = { color: "white" };
  return (
   <nav> 
    <a href="#" onClick={() => setActivateNav('#')} className={activateNav === '#' ? 'active' : '' }><ImHome/> </a>
   
    <a href="#about" onClick={() => setActivateNav('#about')} className={activateNav === '#about' ? 'active' : '' }><SiAboutdotme/> </a>

    <a href="#resume" onClick={() => setActivateNav('#resume')} className={activateNav === '#resume' ? 'active' : '' }>  <MdOutlineWork /></a>
    <a href="#realisations" onClick={() => setActivateNav('#realisations')} className={activateNav === '#realisations' ? 'active' : '' }><GiStairsGoal/> </a>

    <a href="#contact"  onClick={() => setActivateNav('#contact')} className={activateNav === '#contact' ? 'active' : '' }><MdContactPage/> </a>

   </nav>
  )
}

export default Nav