import React from 'react'
import './hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-right'>
                <h1 className='firstline'>Savor the <span>World</span><br /> in <span>One Place</span></h1>
                <h2>Explore delightful homemade recipes and cocktail<br /> creations that will take you on a culinary<br />journey around the globe.</h2>
                <h1 className='punchline-text'>Welcome to the Adventure of flavor!</h1>
            </div>
            <div>
                <img src='https://www.recetasnestlecam.com/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/ba60c1266cbad4ad2e588781d89d1757.webp?itok=ssqvkPR9' alt='si' />
            </div>
        </div>
    )
}

export default Hero