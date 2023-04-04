import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


import Typical from "react-typical";
import CV from "../../../Other/Soumia_Slimani_CV.pdf";
import './Profil.css'
export default function Profil() {

  const style = { color: "orange" };
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          
          <div className="profile-details-name">
        
            <span className="primary-text">
              {" "}
              Hello 😀, I'm {" "}
              <span className="highlighted-text"> Soumia Slimani </span>
            </span> 
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "  Junior Fullstack Web Developer  💻 ",
                    
                    10000,
                    "Java JEE" , 
                    10000,
                    "React JS" ,
                    10000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
              Development of professional applications, websites and application maintenance.
              </span>
            </span>
 
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/soumia-slimani-834774150/"
                target="_blank" 
              >
                <BsLinkedin  style={style} />{" "}
              </a>
              <a href="https://github.com/Soumia08" target="_blank" >
                <FaGithub style={style} />
              </a>
            </div>
          </div>
          </div>
          <div className="profile-options">
            <a href="#contact"> 
            <button className="btn primary-btn"> Contact Me</button>
            </a>
            <a href={CV} download="Soumia-CV.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

            </div> 
            </div>
      </div>
      
    </div>
  );
}
