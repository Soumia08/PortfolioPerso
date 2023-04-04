import React from "react";
import './Footer.css'
// import IMG from './me.jpg'
export default function Footer(){

    let Img = require('../../../Pictures/shape-bg.png');
    return (

        <div className="footer-container">
            <div className="footer-parent"> 
                <img src={Img}  
                     alt='No CNX Here' />
            </div> 

        </div>
    )


}