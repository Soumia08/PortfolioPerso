import React, { useState } from "react";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import "./Resume.css";

 import {IoSchoolSharp} from "react-icons/io5";
 import {FaFileCode} from "react-icons/fa";
 import {GiMaterialsScience} from "react-icons/gi" ;


export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const style = { color: "white" };
  


  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="heading-bullet"> </div>
        <div className="resume-main-heading">
          <span> {props.heading ? props.heading : ""} </span>{" "}
        </div>
        <div className="resume-sub-heading">
          <span> {props.subHeading ? props.subHeading : ""}</span>
        </div>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate + "-" + props.toDate}
          </div>
        ) : (
          <div> </div>
        )}

        <div className="resume-heading-description">
          <span> {props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Formation", logoSrc: IoSchoolSharp },
    { label: "Backend Skills", logoSrc: FaFileCode },
    { label: "Frontend Skills", logoSrc: FaFileCode },
    { label: "Software Engineering Skills", logoSrc: GiMaterialsScience },
  
  ];
  const programmingSkillDetails = [
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 65 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 80 },
  ];

  const backendSkillDetails = [
    { skill: "Java JEE", ratingPercentage: 85 },
    { skill: "MySQL", ratingPercentage: 65 },
    { skill: "Spring Boot", ratingPercentage: 80 },
    { skill: "Rest API", ratingPercentage: 85 },
    { skill: "Maven", ratingPercentage: 65 },
  ];

  const engeneringSkillDetails = [
    { skill: "Python", ratingPercentage: 60 },
    { skill: "Matlab", ratingPercentage: 75 },
    { skill: "Freefem++", ratingPercentage: 75 },
  ];


  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Formation Developpeur Java Full Stack "}
        subHeading={"DAWAN Toulouse,   FRANCE."}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Recherche en simulation et analyses numériques "}
        subHeading={" Ecole Mohammadia d'Ingénieurs, Rabat, MAROC."}
        fromDate={"2017"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Master en mathématiques appliquées"}
        subHeading={" Ecole Normale Supérieure , Casablanca, Maroc."}
        fromDate={"2014"}
        toDate={"2016"}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {backendSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"> </div>
          <span> {skill.skill} </span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"> </div>
          <span> {skill.skill} </span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {engeneringSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"> </div>
          <span> {skill.skill} </span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet " : "bullet"
        }
        key={index}
      >
        <div className="bullet-logo"> <bullet.logoSrc style={style} />  </div>
        <span className="bullet-label">{bullet.label} </span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
        id="resume"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"> </div>
              <div className="bullets">{getBullets()} </div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()} </div>
        </div>
      </div>
    </div>
  );
}
