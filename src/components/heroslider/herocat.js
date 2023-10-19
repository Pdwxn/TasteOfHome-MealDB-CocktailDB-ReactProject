import React from 'react'
import { useState, useEffect } from 'react'
import './herocat.css'
import CategoriesCard from './categoriesCard'
import constants from '../../utils/constants.json'
import { Link } from 'react-router-dom'


function HeroCat() {

    const { SEARCH_IMAGE, CATEGORIES } = constants;


    return (
        <div className='cat-container'>
            <div className='cat-top'>
                <h1>Popular Categories</h1>
            </div>
            <div className='cat-cards'>
                <Link style={{ textDecoration: 'none' }}>
                    <CategoriesCard
                        category={{ text: 'Chicken' }}
                        img={`${SEARCH_IMAGE}chicken.png`} />
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <CategoriesCard
                        category={{ text: 'Dessert' }}
                        img={`${SEARCH_IMAGE}Baking%20Powder.png`} />
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <CategoriesCard
                        category={{ text: 'Beef' }}
                        img={`${SEARCH_IMAGE}beef.png`} />
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <CategoriesCard
                        category={{ text: 'Pasta' }}
                        img={`${SEARCH_IMAGE}basil.png`} />
                </Link>
            </div>
        </div>
    )
}

export default HeroCat