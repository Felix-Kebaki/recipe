import React from 'react'
import './ExpertChefs.css'
import VideoExpert from '../../assets/images/cookingVideo.mp4'

export function ExpertChefs() {
  return (
    <section className='EpertsChefMainSec'>
        <video autoPlay muted loop>
            <source src={VideoExpert}/>
        </video>
        <div className='TittleExpertsMainDiv'>
            <p>Recipes Crafted <br/>by Expert Chefs</p>
        </div>
        <div className='ExpertsDetailsMainDiv'>
            <p>Our recipes are designed by expert chefs with deep culinary knowledge.Each recipe is tested and perfected to ensure great taste and consistent results,bringing professional-quality dishes to your kitchen,whether you’re cooking a classic or something new.</p>
        </div>
    </section>
  )
}

