import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre'
import { ExpertChefs } from '../components/ExpertChefs/ExpertChefs'
import { Ingredients } from '../components/Ingredients/Ingredients'

export function Home() {
  return (
    <div>
        <Hero/>
        <WhoWeAre/>
        <ExpertChefs/>
        <Ingredients/>
    </div>
  )
}

