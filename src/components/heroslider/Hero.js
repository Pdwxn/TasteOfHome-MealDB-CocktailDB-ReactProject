import React from 'react'
import { useState, useEffect } from 'react'
import './hero.css'
import constants from '../../utils/constants.json'
import { Link } from 'react-router-dom';

function Hero() {

    const { API_URL, SEARCH_BY_NAME, SEARCH_BY_ID, CATEGORIES } = constants;

    const [pastaRecipe, setPastaRecipe] = useState([]);
    const [burgerRecipe, setBurgerRecipe] = useState([]);
    const [chickenRecipe, setChickenRecipe] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        const fetchPastaRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}53064`)
                const data = await res.json()

                setPastaRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchPastaRecipe()
    }, []);

    useEffect(() => {
        const fetchBurgerRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}53010`)
                const data = await res.json()

                setBurgerRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {

            }
        }
        fetchBurgerRecipe()
    }, []);

    useEffect(() => {
        const fetchChickenRecipe = async () => {
            try {
                const res = await fetch(`${API_URL}${SEARCH_BY_ID}52951`)
                const data = await res.json()

                setChickenRecipe(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {

            }
        }
        fetchChickenRecipe()
    }, []);

    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <h1 className='firstline'>Savor the <span>World</span><br /> in <span>One Place</span></h1>
                <h2>Explore delightful homemade recipes and cocktail<br /> creations that will take you on a culinary<br />journey around the globe.</h2>
                <h1 className='punchline-text'>Welcome to the Adventure of flavor!</h1>
            </div>
            <div className='hero-right'>
                <Link src='' style={{ textDecoration: 'none' }}>
                    <div className='r-pastaMeal'>
                        <div className='img-pasta'>
                            <img src={pastaRecipe?.strMealThumb} alt='si' />
                        </div>
                        <h5>{pastaRecipe?.strMeal}</h5>
                    </div>
                </Link>
                <Link src='' style={{ textDecoration: 'none' }} className='r-burgerMeal'>
                    <div className='ri-burgerMeal'>
                        <div className='img-container'>
                            <img src={burgerRecipe?.strMealThumb} alt='si' />
                        </div>
                        <h5>{burgerRecipe?.strMeal}</h5>
                    </div>
                </Link>
                <Link src='' style={{ textDecoration: 'none' }}
                    className='r-chickenMeal'>
                    <div className='ri-chickenMeal'>
                        <div className='img-container'>
                            <img src={chickenRecipe?.strMealThumb} alt='si' />
                        </div>
                        <h5>{chickenRecipe?.strMeal}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero