import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

function ContentPage(food) {
    return (
        <>
            <Navbar />
            <div className='food-content'>
                <img src={food.food?.strMealThumb} alt='food-image' />
                <h1>{food.food?.strMeal}</h1>
                <h3>{food.food?.strCategory}</h3>
                <h3>{food.food?.strArea}</h3>
                <ul>
                    <li>{food.food?.strIngredient1}</li>
                    <li>SI</li>
                    <li>SI</li>
                    <li>SI</li>
                </ul>
                <p>SI</p>
            </div>
            <Footer />
        </>
    )
}

export default ContentPage