import React from 'react'
import './shopHero.css'
import ShopMainImage from '../../assets/images/ShopHero.png'

export function ShopHero() {
  return (
    <section className='ShopHeroMainSec'>
        <div className='ShopHeroMainDiv'>
            <div classname="ShopHeroMainWordingsDiv">
                <div>
                <p id="ShopHeroMainWordings">Grab upto 25% off on<br/> the selected ingredient</p>
                </div>
                <button id="ShopHeroMainBtn">Buy Now</button>
            </div>
            <div className='ShopHeroImageWrapper'>
                <img src={ShopMainImage} alt="" />
            </div>
        </div>
    </section>
  )
}

