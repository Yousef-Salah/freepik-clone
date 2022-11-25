import React, { useState, useEffect } from 'react';

import './category-full-list.scss'
import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryList from '../../../utils/CateroryList';
const CategoryFullList = (props) => {
    const [category, setCategory] = useState(props.category);
    const categoryList = CategoryList();
    useEffect(() => {
        console.log("categoryFullList ~", category)
    }, [category])

    return (
        <div className='cat-full-list'>
            <div className="full-list-wrapper">
                {categoryList.map((item, index) => {
                    return (
                        <div className="card-wrapper" key={index}>
                            <CategoryCard category={item} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default CategoryFullList