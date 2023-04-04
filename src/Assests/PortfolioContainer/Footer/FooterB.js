import React from 'react'
import './FooterB.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function FooterB() {
  const style = { color: "orange" };
    return (

     <div className='footer-contenent'> 
    
          <div className="footer__copyright">
            <h6> &copy; Soumia Slimani. All rights reserved . </h6>
             </div>
             <div className='footer-social'>
             <a
                href="https://www.linkedin.com/in/soumia-slimani-834774150/"
                target="_blank" 
              >
                <BsLinkedin style={style}/>{" "}
              </a>
              <a href="https://github.com/Soumia08" target="_blank" >
                <FaGithub style={style} />
              </a>
          </div>
</div>
          
    )    
}
