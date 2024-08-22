import React from "react";
import Plate from "../../assets/images/plate.svg";
import Clock from "../../assets/images/clock.svg";
import "./hero.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export function ImageSlider({
  HeroData,
  currentImage,
  setCurrentImage,
  heroDataDots,
}) {

    const HandleOnClickDots=(GetIndex)=>{
        setCurrentImage(GetIndex)
    }

  if (currentImage === 0) {
    return (
      <div className="SliderImageContent">
        <div className="ImageWrapperSlider">
          <img src={HeroData.image} alt="" />
          <p id="SliderTittle">{HeroData.tittle}</p>
          <div className="DotsDivSlider">
            {heroDataDots.map((each, index) => (
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  index === currentImage
                    ? "AllDotsIcons activeDot"
                    : "AllDotsIcons"
                }
                key={each.id}
                onClick={()=>HandleOnClickDots(index)}
              />
            ))}
          </div>
        </div>

        <div className="TimerServingWrapper">
          <div>
            <img src={Clock} alt="" />
            <p>Prep Time</p>
            <p>15 min</p>
          </div>
          <div>
            <img src={Clock} alt="" />
            <p>Cook Time</p>
            <p>15 min</p>
          </div>
          <div>
            <img src={Plate} alt="" />
            <p>Serving</p>
            <p>4 plates</p>
          </div>
        </div>
        <div className="LittleDetailsOnSlider">
          <p>
            <span>Ingredients :</span>olive oil,lime juice,orange juice,minced
            garlic,chopped cilantro,soy sauce,Worcestershire sauce, ground
            cumin,chili powder,salt and black pepper.
          </p>
          <p>
            <span>Perfect For :</span> Ideal for BBQs,Family Gatherings and
            Fiesta Celebrations
          </p>
        </div>

        <div className="CheckMoreSlider">
          <Link to="">
          Start Cooking Now
            <FontAwesomeIcon icon={faUpRightFromSquare} id="LinkAtSlider" />
          </Link>
        </div>
      </div>
    );
  }

  if (currentImage === 1) {
    return (
      <div className="SliderImageContent">
        <div className="ImageWrapperSlider">
          <img src={HeroData.image} alt="" />
          <p id="SliderTittle">{HeroData.tittle}</p>
          <div className="DotsDivSlider">
            {heroDataDots.map((each, index) => (
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  index === currentImage
                    ? "AllDotsIcons activeDot"
                    : "AllDotsIcons"
                }
                key={each.id}
                onClick={()=>HandleOnClickDots(index)}
              />
            ))}
          </div>
        </div>
        <div className="TimerServingWrapper">
          <div>
            <img src={Clock} alt="" />
            <p>Prep Time</p>
            <p>15 min</p>
          </div>
          <div>
            <img src={Clock} alt="" />
            <p>Cook Time</p>
            <p>30 min</p>
          </div>
          <div>
            <img src={Plate} alt="" />
            <p>Serving</p>
            <p>2 plates</p>
          </div>
        </div>
        <div className="LittleDetailsOnSlider">
          <p>
            <span>Ingredients :</span>pork ribs marinated in olive oil,lemon
            juice,garlic,oregano,rosemary,salt,pepper and a touch of red wine
            vinegar.
          </p>
          <p>
            <span>Perfect For :</span> Great for Summer Cookouts,Dinner Parties
            and Festive Gatherings
          </p>
        </div>

        <div className="CheckMoreSlider">
          <Link to="">
          Start Cooking Now
            <FontAwesomeIcon icon={faUpRightFromSquare} id="LinkAtSlider" />
          </Link>
        </div>
      </div>
    );
  }

  if (currentImage === 2) {
    return (
      <div className="SliderImageContent">
        <div className="ImageWrapperSlider">
          <img src={HeroData.image} alt="" />
          <p id="SliderTittle">{HeroData.tittle}</p>
          <div className="DotsDivSlider">
            {heroDataDots.map((each, index) => (
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  index === currentImage
                    ? "AllDotsIcons activeDot"
                    : "AllDotsIcons"
                }
                key={each.id}
                onClick={()=>HandleOnClickDots(index)}
              />
            ))}
          </div>
        </div>
        <div className="TimerServingWrapper">
          <div>
            <img src={Clock} alt="" />
            <p>Prep Time</p>
            <p>5 min</p>
          </div>
          <div>
            <img src={Clock} alt="" />
            <p>Cook Time</p>
            <p>15 min</p>
          </div>
          <div>
            <img src={Plate} alt="" />
            <p>Serving</p>
            <p>1 plates</p>
          </div>
        </div>
        <div className="LittleDetailsOnSlider">
          <p>
            <span>Ingredients :</span> carrots,celery,onions,garlic,tomatoes,green beans,potatoes,vegetable broth and herbs.
          </p>
          <p>
            <span>Perfect For :</span> Ideal for Family Gathering,Healthy Lunch Option,Winter Warmth and Summer picnic
          </p>
        </div>

        <div className="CheckMoreSlider">
          <Link to="">
          Start Cooking Now
            <FontAwesomeIcon icon={faUpRightFromSquare} id="LinkAtSlider" />
          </Link>
        </div>
      </div>
    );
  }

  if (currentImage === 3) {
    return (
      <div className="SliderImageContent">
        <div className="ImageWrapperSlider">
          <img src={HeroData.image} alt="" />
          <p id="SliderTittle">{HeroData.tittle}</p>
          <div className="DotsDivSlider">
            {heroDataDots.map((each, index) => (
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  index === currentImage
                    ? "AllDotsIcons activeDot"
                    : "AllDotsIcons"
                }
                key={each.id}
                onClick={()=>HandleOnClickDots(index)}
              />
            ))}
          </div>
        </div>
        <div className="TimerServingWrapper">
          <div>
            <img src={Clock} alt="" />
            <p>Prep Time</p>
            <p>5 min</p>
          </div>
          <div>
            <img src={Clock} alt="" />
            <p>Cook Time</p>
            <p>15 min</p>
          </div>
          <div>
            <img src={Plate} alt="" />
            <p>Serving</p>
            <p>4 plates</p>
          </div>
        </div>
        <div className="LittleDetailsOnSlider">
          <p>
            <span>Ingredients :</span>ripe bananas,flour,eggs,milk,baking
            powder,sugar,vanilla extract and a pinch of salt.
          </p>
          <p>
            <span>Perfect For :</span> Perfect for Weekend Brunches,Breakfast in
            Bed and Family Mornings
          </p>
        </div>

        <div className="CheckMoreSlider">
          <Link to="">
          Start Cooking Now
            <FontAwesomeIcon icon={faUpRightFromSquare} id="LinkAtSlider" />
          </Link>
        </div>
      </div>
    );
  }
}
