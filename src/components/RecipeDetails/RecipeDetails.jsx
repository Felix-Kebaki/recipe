import React, { useContext, useEffect } from "react";
import "./recipeDetails.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { GlobalFetchContext } from "../../context/GlobalContext";

export function RecipeDetails() {
  const { setRecipeDetails, recipeDetails } = useContext(GlobalFetchContext);
  const param = useParams();
  async function getDetails() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`
    );
    const data = await response.json();

    if (data && data.meals) {
      setRecipeDetails(data.meals);
    }
    console.log(recipeDetails);
  }

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <section className="RecipeDetailsMainSec">
      {recipeDetails &&
        recipeDetails.map((details) => (
          <div key={details.idMeal} className="EachClassDetailsRe">
            <div className="DetailsImageWrapper">
              <img src={details.strMealThumb} alt="" />
            </div>
            <div className="DetailsWordwrapperEach">
              <div className="InsideDetailsWording">
                <p id="EachRecipeName">{details.strMeal}</p>
                <p id="IngredTittleEach">Ingredients</p>
                <p id="AllIngredientsEach">
                  {details.strIngredient1}: <span>{details.strMeasure1}</span>,
                  {details.strIngredient2}: <span>{details.strMeasure2}</span>,
                  {details.strIngredient3}: <span>{details.strMeasure3}</span>
                  {details.strIngredient4}: <span>{details.strMeasure4}</span>,
                  {details.strIngredient5}: <span>{details.strMeasure5}</span>,
                  {details.strIngredient6}: <span>{details.strMeasure6}</span>
                  {details.strIngredient7}: <span>{details.strMeasure7}</span>,
                  {details.strIngredient8}: <span>{details.strMeasure8}</span>,
                  {details.strIngredient9}: <span>{details.strMeasure9}</span>
                  {details.strIngredient10}: <span>{details.strMeasure10}</span>
                  ,{details.strIngredient11}:{" "}
                  <span>{details.strMeasure11}</span>,{details.strIngredient12}:{" "}
                  <span>{details.strMeasure12}</span>
                  {details.strIngredient13}: <span>{details.strMeasure13}</span>
                  ,{details.strIngredient14}:{" "}
                  <span>{details.strMeasure14}</span>,{details.strIngredient15}:{" "}
                  <span>{details.strMeasure15}</span>
                </p>
                <div className="ButtonDivWrapperDetails">
                <Link id="ShopAtEacDetails">Shop Ingredients</Link>
                </div>
                <p id="InstructionTittle">Instructions</p>
                <p id="AllInstructionsEach">{details.strInstructions}</p>
                <div className="WrapperTagsInDetails">
                  {details.strArea && (
                    <div>
                      <FontAwesomeIcon icon={faCircle} id="DetailsDotEach"/>
                      <p>{details.strArea}</p>
                    </div>
                  )}
                  {details.strCategory && (
                    <div>
                      <FontAwesomeIcon icon={faCircle} id="DetailsDotEach"/>
                      <p>{details.strCategory}</p>
                    </div>
                  )}
                  {details.strTags && (
                    <div>
                      <FontAwesomeIcon icon={faCircle} id="DetailsDotEach"/>
                      <p>{details.strTags}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
