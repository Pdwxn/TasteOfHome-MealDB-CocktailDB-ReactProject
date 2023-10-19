import React from 'react'
import './categoriesCard.css'

function CategoriesCard({ category, img }) {

    return (
        <div className='c-card'>
            <img src={img} alt='Category-cosa' />
            <h3>{`${category.text}`}</h3>
        </div>
    )
}

export default CategoriesCard