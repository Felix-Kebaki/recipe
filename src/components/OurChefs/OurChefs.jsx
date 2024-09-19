import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { ChefsDetails } from "../../constants/data";
import "./OurChefs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function OurChefs() {



  const HandleForwardClick=()=>{
  
  }

  const HandleBackwardClick=()=>{

  }

  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger:"#OurChefMainTittle",
        toggleActions: "play none none none",
        start:"top 80%",
        end:"top 3%",
      }})
    .from("#OurChefMainTittle",{
      xPercent: -30,
      opacity: 0,
    })
    .from(".EachChefDiv",{
      stagger:0.5,
      opacity:0
    })
  },[])

  return (
    <section className="OurChefsMainSec">
      <div className="OurChefMainDiv">
        <p id="OurChefMainTittle">OUR CHEFS</p>
        <div className="DisplayOnOurChefSec">
          <div className="SlidingDiv">
          {ChefsDetails &&
            ChefsDetails.map((EachChef, index) => (
              <div
                key={EachChef.id}
                className="EachChefDiv">
                <div className="VideoImageWrapper">
                  <img src={EachChef.image} id="EachChefPic" />
                </div>
                <div className="ChefsTopInformation">
                  <div className="DotNationalityDiv">
                    <FontAwesomeIcon icon={faCircle} id="ChefsCircles" />
                    <p>{EachChef.nationality}</p>
                  </div>
                  <div className="ExperienceDiv">
                    <p>
                      <span>Experience :</span>
                      {EachChef.experience}
                    </p>
                  </div>
                </div>
                <p id="ChefsName">{EachChef.ChefName}</p>
                <p id="Specialization">{EachChef.specialty}</p>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
