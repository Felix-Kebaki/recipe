import React, { useContext } from 'react'
import { GlobalFetchContext } from '../../context/GlobalContext'
import './displayRecipe.css'

export function DisplayRecipe() {

    const {recipe}=useContext(GlobalFetchContext)
  return (
    <section className='DisplayRecipeMainDiv'>
        {recipe &&
            recipe.map((each)=>(
                <div className='DisplayEachRecipe'>
                    <img src={each.recipe.image} alt="RecipeImage" id="MainRecipeImage"/>
                    <div className='EachRecipeDetailsDiv'>
                    <p id="EachRecipeTittle">{each.recipe.label}</p>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

