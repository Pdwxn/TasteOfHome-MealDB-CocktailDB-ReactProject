import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

function ContentMeal({ idMeal }) {
    return (
        <>
            <Navbar />
            <div className='food-content'>
                <img src={''} alt='food-image' />
                <h1>{''}</h1>
                <h3>{''}</h3>
                <h3>{''}</h3>
                <ul>
                    <li>{''}</li>
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

export default ContentMeal