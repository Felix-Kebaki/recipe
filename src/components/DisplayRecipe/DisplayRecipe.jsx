import React, { useContext } from "react";
import { GlobalFetchContext } from "../../context/GlobalContext";
import "./displayRecipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function DisplayRecipe() {
  const { recipe } = useContext(GlobalFetchContext);
  return (
    <section className="DisplayRecipeMainDiv">
      {recipe &&
        recipe.map((each) => (
          <Link className="DisplayEachRecipe" key={each.idMeal}>
            <div className="EachRecipeImageDiv">
              <img
                src={each.strMealThumb}
                alt="RecipeImage"
                id="MainRecipeImage"
              />
              <FontAwesomeIcon icon={faHeart} className="FavIconOnRecipe"/>
            </div>
            <div className="EachRecipeDetailsDiv">
              <div className="EachRecipeTopLittleDetails">
                <p className="DotNationsRecipeWrapper">
                  <FontAwesomeIcon icon={faCircle} id="RecipesCircles"/>
                  <span id="RecipeNationality">{each.strArea}</span>
                </p>
                <p id="CategoryRecipe">CATEGORY :<span>{each.strCategory}</span></p>
              </div>
              <p id="EachRecipeTittle">{each.strMeal}</p>
            </div>
          </Link>
        ))}
 
    </section>
  );
}
