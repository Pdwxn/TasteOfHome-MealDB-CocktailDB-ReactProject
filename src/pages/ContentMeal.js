import React, { useEffect, useState } from 'react'
import './contentmeal.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import constants from '../utils/constants.json'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function ContentMeal() {

    const { API_URL, SEARCH_BY_NAME, SEARCH_BY_ID, CATEGORIES } = constants;

    const { id } = useParams([]);
    const [mealData, setMealData] = useState({});

    useEffect(() => {
        const fetchContentMeal = async () => {
            try {
                const rest = await fetch(`${API_URL}${SEARCH_BY_ID}${id}`)
                const data = await rest.json()

                setMealData(data.meals[0])
                console.log(data.meals[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchContentMeal()
    }, [])


    return (
        <>
            <Navbar />
            <div className='food-content'>
                <div className='top-container' >
                    <div className='lft-side'>
                        <img className='meal-img' src={`${mealData.strMealThumb}`} alt='food' />
                    </div>
                    <div className='rght-side'>
                        <h1>{`${mealData.strMeal}`}</h1>
                        <span>{`${mealData.strArea}`} / </span>
                        <span>{`${mealData.strCategory}`}</span>
                        <ul className='ingredients'>
                            <li>{`${mealData.strIngredient1} ${mealData.strMeasure1}`}</li> <li>{`${mealData.strIngredient2} ${mealData.strMeasure2}`}</li> <li>{`${mealData.strIngredient3} ${mealData.strMeasure3}`}</li> <li>{`${mealData.strIngredient4} ${mealData.strMeasure4}`}</li> <li>{`${mealData.strIngredient5} ${mealData.strMeasure5}`}</li> <li>{`${mealData.strIngredient6} ${mealData.strMeasure6}`}</li> <li>{`${mealData.strIngredient7} ${mealData.strMeasure7}`}</li> <li>{`${mealData.strIngredient8} ${mealData.strMeasure8}`}</li> <li>{`${mealData.strIngredient9} ${mealData.strMeasure9}`}</li> <li>{`${mealData.strIngredient10} ${mealData.strMeasure10}`}</li> <li>{`${mealData.strIngredient11} ${mealData.strMeasure11}`}</li> <li>{`${mealData.strIngredient12} ${mealData.strMeasure12}`}</li> <li>{`${mealData.strIngredient13} ${mealData.strMeasure13}`}</li> <li>{`${mealData.strIngredient14} ${mealData.strMeasure14}`}</li> <li>{`${mealData.strIngredient15} ${mealData.strMeasure15}`}</li> <li>{`${mealData.strIngredient16} ${mealData.strMeasure16}`}</li> <li>{`${mealData.strIngredient17} ${mealData.strMeasure17}`}</li> <li>{`${mealData.strIngredient18} ${mealData.strMeasure18}`}</li> <li>{`${mealData.strIngredient19} ${mealData.strMeasure19}`}</li> <li>{`${mealData.strIngredient20} ${mealData.strMeasure20}`}</li>
                        </ul>

                    </div>
                </div>
                <div className='info-meal'>
                    <p>{`${mealData.strInstructions}`}</p>
                    <Link to={`${mealData.strSource}`} style={{ textDecoration: 'none' }}><h4>Source</h4></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContentMeal