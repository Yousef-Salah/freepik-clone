import React from 'react'
import './category-card.scss';

const CategoryCard = () => {
    return (

        <div className='cat-card'>
            <a href='https://www.yourllvelyhref.com'>
                <div className="cat-card-wrapper">
                    <img src={require('../../assets/images/cat-card-dummy-image.webp')} alt="cat-img" />
                    <h5>Veteran's day backgrounds</h5>
                </div>
            </a>

        </div>

    )
}

export default CategoryCard