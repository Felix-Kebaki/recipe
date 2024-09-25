import React, { useContext, useEffect, useState } from "react";
import { GlobalFetchContext } from "../../context/GlobalContext";
import "./displayRecipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function DisplayRecipe() {
  const { recipe ,HandleAddToFav,favouriteList,categories,searchCat,HandleClickOnCategory} = useContext(GlobalFetchContext);
  const [filter,setFilter]=useState(false)

  const HandleClickOfFav=(e)=>{
    e.preventDefault()
  }

  const HandleMouseEnter=()=>{
    setFilter(true)
  }
  const HandleMouseLeave=()=>{
    setFilter(false)
  }

  useEffect(()=>{
    const BtnFilter=document.querySelector(".FilterStill")
    BtnFilter.addEventListener("mouseenter",HandleMouseEnter)
    BtnFilter.addEventListener("mouseleave",HandleMouseLeave)
    

    return()=>{
        BtnFilter.removeEventListener("mouseenter",HandleMouseEnter)
        BtnFilter.removeEventListener("mouseleave",HandleMouseLeave)
    }
  },[])
 
  return (
    <section className="DisplayRecipeMainSec">
        <div className="FilterDivWrapper">
           <ul className="FilterStill">
            <li className="FilterBtn">Filter <FontAwesomeIcon icon={faAngleDown} /></li>
            <div className={filter ?"FilterLinksOnlyDiv showFilter":"FilterLinksOnlyDiv unshowFilter"}>
                {categories && 
                    categories.map((cat)=>(
                        <p key={cat.idCategory} id="EachFilterLink" onClick={()=>HandleClickOnCategory(cat.strCategory)}>{cat.strCategory}</p>
                    ))
                }
            </div>
            </ul>


        </div>
        <div className="DisplayRecipeMainDiv">
      {recipe &&
        recipe.map((each) => (
          <Link to={"/recipe/recipes/"+each.idMeal} className="DisplayEachRecipe" key={each.idMeal}>
            <div className="EachRecipeImageDiv">
              <img
                src={each.strMealThumb}
                alt="RecipeImage"
                id="MainRecipeImage"
              />
              <p onClick={HandleClickOfFav}><FontAwesomeIcon icon={faHeart} className={favouriteList.findIndex(ok=>ok.idMeal===each.idMeal) !==-1 ? "FavIconOnRecipe favPage":"FavIconOnRecipe"} onClick={()=>HandleAddToFav(each)}/></p>
            </div>
            <div className="EachRecipeDetailsDiv">
              <div className="EachRecipeTopLittleDetails">
                {each.strArea && <p className="DotNationsRecipeWrapper">
                  <FontAwesomeIcon icon={faCircle} id="RecipesCircles"/>
                  <span id="RecipeNationality">{each.strArea}</span>
                </p>}
                <p id="CategoryRecipe">CATEGORY :<span>{each.strCategory?each.strCategory:searchCat}</span></p>
              </div>
              <p id="EachRecipeTittle">{each.strMeal}</p>
            </div>
          </Link>
        ))}
    </div>
    </section>
  );
}
