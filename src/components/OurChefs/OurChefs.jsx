import React, { useState } from "react";
import { ChefsDetails } from "../../constants/data";
import "./OurChefs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function OurChefs() {
  const [playVideo, setPlayVideo] = useState(false);
  const HandleMouseEnter = (getIndex, getId) => {
    if (getIndex === getId - 1) {
      setPlayVideo(true);
    } else if (getIndex !== getId - 1) {
      setPlayVideo(false);
    }
  };

  const HandleMouseLeave = (getIndex, getId) => {
    if (getIndex === getId - 1) {
      setPlayVideo(false);
    } else if (getIndex !== getId - 1) {
      setPlayVideo(true);
    }
  };
  return (
    <section className="OurChefsMainSec">
      <div className="OurChefMainDiv">
        <p id="OurChefMainTittle">OUR CHEFS</p>
        <div className="DisplayOnOurChefSec">
          {ChefsDetails &&
            ChefsDetails.map((EachChef, index) => (
              <div
                key={EachChef.id}
                className="EachChefDiv"
                onMouseEnter={() => HandleMouseEnter(index, EachChef.id)}
                onMouseLeave={() => HandleMouseLeave(index, EachChef.id)}
              >
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
        <div className="ArrowsOfChefsDiv">
          <FontAwesomeIcon icon={faChevronLeft} id="ChefsArrowIcons" />
          <FontAwesomeIcon icon={faChevronRight} id="ChefsArrowIcons" />
        </div>
      </div>
    </section>
  );
}
