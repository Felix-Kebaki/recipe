import React, { useContext, useEffect } from "react";
import "./recipeDetails.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
    
  }

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <section className="RecipeDetailsMainSec">
      {recipeDetails &&
        recipeDetails.map((details) => (
          <div key={details.idMeal}>
            <div className="EachClassDetailsRe">
              <div className="DetailsImageWrapper">
                <img src={details.strMealThumb} alt="" />
              </div>
              <div className="DetailsWordwrapperEach">
                <div className="InsideDetailsWording">
                  <p id="EachRecipeName">{details.strMeal}</p>
                  <p id="IngredTittleEach">Ingredients</p>
                  <p id="AllIngredientsEach">
                    {details.strMeasure1 &&
                      `${details.strMeasure1} ${details.strIngredient1}  `}
                    {details.strMeasure2 &&
                      `,${details.strMeasure2} ${details.strIngredient2}  `}
                    {details.strMeasure3 &&
                      `,${details.strMeasure3} ${details.strIngredient3}  `}
                    {details.strMeasure4 &&
                      `,${details.strMeasure4} ${details.strIngredient4}  `}
                    {details.strMeasure5 &&
                      `,${details.strMeasure5} ${details.strIngredient5}  `}
                    {details.strMeasure6 &&
                      `,${details.strMeasure6} ${details.strIngredient6}  `}
                    {details.strMeasure7 &&
                      `,${details.strMeasure7} ${details.strIngredient7}  `}
                    {details.strMeasure8 &&
                      `,${details.strMeasure8} ${details.strIngredient8}  `}
                    {details.strMeasure9 &&
                      `,${details.strMeasure9} ${details.strIngredient9}  `}
                    {details.strMeasure10 &&
                      `,${details.strMeasure10} ${details.strIngredient10}  `}
                    {details.strMeasure11 &&
                      `,${details.strMeasure11} ${details.strIngredient11}  `}
                    {details.strMeasure12 &&
                      `,${details.strMeasure12} ${details.strIngredient12}  `}
                    {details.strMeasure13 &&
                      `,${details.strMeasure13} ${details.strIngredient13}  `}
                    {details.strMeasure14 &&
                      `,${details.strMeasure14} ${details.strIngredient14}  `}
                    {details.strMeasure15 &&
                      `,${details.strMeasure15} ${details.strIngredient15}  `}
                  </p>
                  <div className="ButtonDivWrapperDetails">
                    <Link id="ShopAtEacDetails">Shop Ingredients</Link>
                  </div>
                  <p id="InstructionTittle">Instructions</p>
                  <p id="AllInstructionsEach">{details.strInstructions}</p>
                  {details.strSource &&
                  <a href={details.strSource} className="MoreToNewWebsite">
                  <p id="MoreToNewWebsite" target="_blank">More details</p>
                  <FontAwesomeIcon icon={faUpRightFromSquare} id="MoreIconLinkRecipe"/>
                  </a>}
                  <div className="WrapperTagsInDetails">
                    {details.strArea && (
                      <div>
                        <FontAwesomeIcon icon={faCircle} id="DetailsDotEach" />
                        <p>{details.strArea}</p>
                      </div>
                    )}
                    {details.strCategory && (
                      <div>
                        <FontAwesomeIcon icon={faCircle} id="DetailsDotEach" />
                        <p>{details.strCategory}</p>
                      </div>
                    )}
                    {details.strTags && (
                      <div>
                        <FontAwesomeIcon icon={faCircle} id="DetailsDotEach" />
                        <p>{details.strTags}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
