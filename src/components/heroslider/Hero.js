import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom';

function Hero(props) {

    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <h1 className='firstline'>Savor the <span>World</span><br /> in <span>One Place</span></h1>
                <h2>Explore delightful homemade recipes and cocktail<br /> creations that will take you on a culinary<br />journey around the globe.</h2>
                <h1 className='punchline-text'>Welcome to the Adventure of flavor!</h1>
            </div>
            <div className='hero-right'>
                <Link to={`./meal/${props.pasta?.idMeal}`} style={{ textDecoration: 'none' }}>
                    <div className='r-pastaMeal'>
                        <div className='img-pasta'>
                            <img src={props.pasta?.strMealThumb} alt='si' />
                        </div>
                        <h5>{props.pasta?.strMeal}</h5>
                    </div>
                </Link>
                <Link to={`./meal/${props.burger?.idMeal}`} style={{ textDecoration: 'none' }} className='r-burgerMeal'>
                    <div className='ri-burgerMeal'>
                        <div className='img-container'>
                            <img src={props.burger?.strMealThumb} alt='si' />
                        </div>
                        <h5>{props.burger?.strMeal}</h5>
                    </div>
                </Link>
                <Link to={`./meal/${props.chicken?.idMeal}`} style={{ textDecoration: 'none' }}
                    className='r-chickenMeal'>
                    <div className='ri-chickenMeal'>
                        <div className='img-container'>
                            <img src={props.chicken?.strMealThumb} alt='si' />
                        </div>
                        <h5>{props.chicken?.strMeal}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero