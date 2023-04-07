import React from "react";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import "./About.css";
import CV from "../../../Other/CV_Soumia_Slimani.pdf";
export default function About(props) {
  const SCREEN_CONSTANTS = {
    description:
      " Hello, I am Soumia Slimani, a creative and passionate web developer. With years of experience in computer simulation and software development, I chose to specialize in web development to utilize my problem solving and creative skills. Through my accelerated training in Java and React JS, I was able to acquire the skills necessary to design and develop high-quality web applications (found below.). With a background in web design, architecture and databases, I am able to complete projects from the back-end to the front-end. I continue to learn and work on new projects to improve my skills and stay up to date with the latest trends in web development, including the use of Open AI tools. In short, if you are looking for a passionate, creative and committed web developer for your team or project, contact me without hesitation. I am ready to put my skills at your disposal to meet all your challenges!",
    highlights: {
      bullets: [
        "First light the candle. ",
        "Next open the box. ",
        "Finally place the three magic items .",
        "Bla bala bla bla . ",
      ],
      heading: "Here are few a highliht : ",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
          <span> {value} </span>
        
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id="about">
      <div className="about-me-parent">
        <ScreenHeading title={"About me"} subHeading={" Get to know  "} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
            Hello, I am Soumia Slimani, a creative and passionate web developer. With years of experience in computer simulation and software development, 
            I chose to specialize in web development to utilize my problem solving and creative skills. 

            <br/>
            <br/>

           Through my accelerated training in Java and React JS, I was able to acquire the skills necessary to design and develop high-quality web applications
          (found below.). With a background in web design, architecture and databases, I am able to complete projects from the back-end to the front-end.
          <br/>
          <br/>

          I continue to learn and work on new projects to improve my skills and stay up to date with the latest trends in web development, 
          including the use of Open AI tools.
          <br/>
          <br/>

          In short, if you are looking for a passionate, creative and committed web developer for your team or project, 
          contact me without hesitation. I am ready to put my skills at your disposal to meet all your challenges!
          <br/>

            </span>
            {/* <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>

              {renderHighlight()}
            </div> */}
            <div className="about-me-options">
              <a href="#contact"> 
              <button className="btn primary-btn"> Contact me  </button>
              </a>
              <a href={CV} download="Soumia-CV.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
