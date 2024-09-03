import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import './ExpertChefs.css'
import VideoExpert from '../../assets/images/cookingVideo.mp4'

export function ExpertChefs() {

  useGSAP(()=>{
    gsap.timeline({

    })
    gsap.from("#AnimationOnExpertTittle",{
      scrollTrigger:{
        trigger:".TittleExpertsMainDiv",
        toggleActions:"play none none none",
        start:"top 60%",
      },
      xPercent:-20,
      opacity:0,
    })
    gsap.from("#AnimateExpertDetails",{
      scrollTrigger:{
        trigger:".ExpertsDetailsMainDiv",
        toggleActions:"play none none none",
        start:"top 60%"
      },
      xPercent:-120
    })
  },[])
  return (
    <section className='EpertsChefMainSec'>
        <video autoPlay muted loop>
            <source src={VideoExpert}/>
        </video>
        <div className='TittleExpertsMainDiv'>
            <p id="AnimationOnExpertTittle">Recipes Crafted <br/>by Expert Chefs</p>
        </div>
        <div className='ExpertsDetailsMainDiv'>
            <p id="AnimateExpertDetails">Our recipes are designed by expert chefs with deep culinary knowledge.Each recipe is tested and perfected to ensure great taste and consistent results,bringing professional-quality dishes to your kitchen,whether you’re cooking a classic or something new.</p>
        </div>
    </section>
  )
}

