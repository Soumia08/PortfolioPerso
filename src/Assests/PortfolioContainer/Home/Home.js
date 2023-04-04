import React from 'react'
import Footer from '../Footer/Footer'
import Profil from './Profil.js'
import './Home.css'
import Header from '../Header/Header'
export default function Home() {
  return (
    <div  className='home-container' id='home'>

      <Header/> 
       <Profil/>
      <Footer/>

    

    </div>
  )
}
