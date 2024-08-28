import React, { useEffect, useState } from "react";
import { ChefsDetails } from "../../constants/data";
import "./OurChefs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function OurChefs() {

  const [currentIndex,setCurrentIndex]=useState(0)

  const HandleForwardClick=()=>{
    setCurrentIndex((prev)=>
    prev===ChefsDetails.length-1?0:prev+1
  )
  }

  const HandleBackwardClick=()=>{

  }



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
                  <img src={EachChef.image} alt="" />
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
        <div className="ArrowsOfChefsDiv">
          <FontAwesomeIcon icon={faChevronLeft} id="ChefsArrowIcons" onClick={HandleBackwardClick}/>
          <FontAwesomeIcon icon={faChevronRight} id="ChefsArrowIcons" onClick={HandleForwardClick}/>
        </div>
      </div>
    </section>
  );
}
