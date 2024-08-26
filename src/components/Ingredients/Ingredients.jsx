import React from "react";
import "./Ingredients.css";
import IngredientsPic from "../../assets/images/Ingredients.jpeg";

export function Ingredients() {
  return (
    <section className="IngredientsMainSec">
      <div className="IngredientMainDiv">
        <div className="IngredientImageWrapper">
          <img src={IngredientsPic} alt="" />
        </div>
        <div className="IngredientsWordingWrapper">
          <div className="InsideIngreWrapperDiv">
            <p id="ShopWithUsTittle">SHOP WITH US</p>
            <p id="IngredientActualTittle">
              Shop Fresh Ingredients for Perfect Recipes
            </p>
            <div className="IngredientsWordsOnlyMainDiv">
              <div className="IngredientsUpperWording">
                <p>
                  Elevate your cooking with premium ingredients from our
                  website.Fresh,high-quality and sourced with care.
                </p>
                <p>
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
