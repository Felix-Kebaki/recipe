import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import delicious from "../../assets/images/delicious.jpeg";
import MainHero from "../../assets/images/main.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { HeroData } from "./HeroData";
import { ImageSlider } from "./ImageSlider";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((count) => {
        return count === HeroData.length - 1 ? 0 : count + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="HeroMainSec">
      <div className="HeroWrapperDiv">
        <div className="FirstHeroDiv">
          <div className="UpperHeroDiv">
            <div className="BigWordsDiv">
              <p className="HeroMainWords">
                Discover delicious
                <br /> <img src={delicious} alt="" /> <span>recipes</span>.
              </p>
            </div>
          </div>
          <div className="LowerHeroDiv">
            <div className="ImageWrapperHero">
              <img src={MainHero} alt="" />
              <div className="SmallDetailsDiv">
                <p>
                  Discover a World<br></br> of Flavors
                </p>
                <FontAwesomeIcon icon={faArrowRight} id="LinkArrowIcon" />
              </div>
            </div>
          </div>
        </div>

        <div className="SecondHeroDiv">
          <div className="SmallWordsDiv">
            <div className="SmallTittlesDiv">
              <p id="DeliciousTittle">Delicious Dishes</p>
              <p id="MasteryTittle">Mastering the Art of Deliciousness</p>
            </div>
            <p>
              Welcome to our recipe haven,where culinary creativity meets
              simplicity.Discover an array of delicious,easy-to-follow recipes
              that inspire home cooking.Whether you're a novice or a seasoned
              chef,find the perfect dish to delight your taste buds and impress
              your loved ones.Let's cook something amazing together!
            </p>
            <div className="StartCookingBtnDiv">
              <Link to="/">Explore Delicious Recipes</Link>
            </div>
          </div>

          <div className="SliderContentOnHeroDiv">
            <div className="DispalySliderSec">
              <ImageSlider
                HeroData={HeroData[currentImage]}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                heroDataDots={HeroData}
              />
            </div>

            {/* <div className="HistorySection">
            <p id="HistoryTittle">Explore Our Flavor Journey</p>
            <div>
              <Link to="">
                <p></p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
