import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../ScreenHeading/ScreenHeading";

import portfolio from '../../../Pictures/portfolioImg.png';
import livre from '../../../Pictures/livretroc.png';

import './Realisation.css'

export default function Realisation() {

  let Img = require('../../../Pictures/shape-bg.png');
  const style = { color: "orange" };

  const options = {
    loop: true,
    margin:0,
    nav:true,
    animateIn:"bounceInRight",
    animateOut:"bounceOutRight",
    dots:true,
    autoplay:true,
    smartSpeed:1000,             //     1000,
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:1,
      },
      1000:{
        items:2,
      },
    }

  }
  const optionsPhone = {
    loop: true,
    margin:0,
    nav:true,
    animateIn:"bounceInRight",
    animateOut:"bounceOutRight",
    dots:true,
    autoplay:true,
    smartSpeed:1000,             //     1000,
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:1,
      },
      1000:{
        items:1,
      },
    }

  }


  return (
    <div id="realisations">
      <ScreenHeading
        title={"Achievements"}
        subHeading={"What i did until this time "}
      />
      <section className="realisations-section">
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="realisation-carousel"
            {...options}>
              <div className="col-lg-12">
                <div className="realisation-item">
                 

                  <div className="client-info"> 
                     <a href="https://github.com/Soumia08"> <h5> Livre Troc </h5> </a>
                    <p>  Second hand books exchange application.</p>

                  </div>
                  <div className="realisation-text">
                  <div className="image"> 
                       <img src={livre} alt="no cnx"/>
                        </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="realisation-item">
                  <div className="client-info"> 
                    <a href="https://github.com/Soumia08">  <h5> Portfolio </h5> </a> 
                    <p>  Site on which you are currently 🤭 .  </p>

                  </div>
                  <div className="realisation-text">
                   
                      <div className="image"> 
                       <img src={portfolio} alt="no cnx"/>
                        </div>
                     
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <OwlCarousel className="owl-carousel-Phone" id="realisation-carousel"
            {...optionsPhone}>
              <div className="col-lg-12">
                <div className="realisation-item">
                 

                  <div className="client-info"> 
                     <a href="https://github.com/Soumia08"> <h5> Livre Troc  </h5> </a>
                    <p>  Second hand books exchange application.</p>

                  </div>
                  <div className="realisation-text">
                  <div className="image"> 
                       <img src={livre} alt="no cnx"/>
                        </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="realisation-item">
                  <div className="client-info"> 
                    <a href="https://github.com/Soumia08">  <h5> Portfolio </h5> </a> 
                    <p>  Site on which you are currently 🤭 .  </p>

                  </div>
                  <div className="realisation-text">
                   
                      <div className="image"> 
                       <img src={portfolio} alt="no cnx"/>
                        </div>
                     
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
