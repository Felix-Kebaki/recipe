import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import "./Ingredients.css";
import IngredientsPic from "../../assets/images/Ingredients.jpeg";

export function Ingredients() {
  useGSAP(() => {
    gsap.from("#IngredientImageMain", {
      scrollTrigger: {
        trigger: "#IngredientImageMain",
        toggleActions: "play none none none",
        scrub: true,
        start: "top 90%",
        end: "top 3%",
      },
      yPercent: 20,
      scale: 1.1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".IngredientsWordingWrapper",
          toggleActions: "play none none none",
          start: "top 80%",
          end: "top 3%",
        },
      })
      .from("#ShopWithUsTittle", {
        xPercent: -30,
        opacity: 0,
      })
      .from("#IngredientActualTittle", {
        opacity: 0,
      })
      .from(".IngredientsUpperWording", {
        yPercent:-120
      })
      .from(".IngredientsLowerWording", {
        delay:0.2,
        yPercent:120
      })
  }, []);
  return (
    <section className="IngredientsMainSec">
      <div className="IngredientMainDiv">
        <div className="IngredientImageWrapper">
          <img src={IngredientsPic} id="IngredientImageMain" />
        </div>
        <div className="IngredientsWordingWrapper">
          <div className="InsideIngreWrapperDiv">
            <p id="ShopWithUsTittle">SHOP WITH US</p>
            <p id="IngredientActualTittle">
              Shop Fresh Ingredients for Perfect Recipes
            </p>
            <div className="IngredientsWordsOnlyMainDiv">
              <div className="IngredientsUpperWording">
                <p id="AminationOnUpperWordsOne">
                  Elevate your cooking with premium ingredients from our
                  website.Fresh,high-quality and sourced with care.
                </p>
                <p id="AminationOnUpperWordsTwo">
                  Our ingredients are selected for their exceptional flavor and
                  quality,enhancing every dish.Enjoy the convenience of having
                  top-notch ingredients delivered to your door.
                </p>
              </div>
              <div className="IngredientsLowerWording">
                <div className="VerticalLineIngredients"></div>
                <div className="LowerActualWordsIngr">
                  <p>
                    From everyday essentials to specialty items, our range
                    caters to all your culinary needs. Trust us for ingredients
                    that make every meal memorable and delicious.
                  </p>
                  <div>
                    <button>Shop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
