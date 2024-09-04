import React, { useContext } from 'react'
import { GlobalFetchContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export function Favourite() {

    const {favouriteList,HandleAddToFav}=useContext(GlobalFetchContext)
    const HandleClickOfFav=(e)=>{
        e.preventDefault()
      }
  return (
    <section className="DisplayRecipeMainDiv">
      {favouriteList && favouriteList.length>0?
        favouriteList.map((each) => (
          <Link to={"/recipes/"+each.idMeal} className="DisplayEachRecipe" key={each.idMeal}>
            <div className="EachRecipeImageDiv">
              <img
                src={each.strMealThumb}
                alt="RecipeImage"
                id="MainRecipeImage"
              />
              <p onClick={HandleClickOfFav}><FontAwesomeIcon icon={faHeart} className="FavIconOnRecipe favPage" onClick={()=>HandleAddToFav(each)}/></p>
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
        )):
            <section style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p style={{fontSize:"1.5rem"}}>No favourites</p>
            </section>
        }
    </section>
  )
}
