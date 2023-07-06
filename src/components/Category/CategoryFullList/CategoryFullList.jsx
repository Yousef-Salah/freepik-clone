import React from 'react'

import './category-full-list.scss'
import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoryList } from '../../../utils/Categories'

const CategoryFullList = () => (
  <div className="cat-full-list">
    <div className="full-list-wrapper">
      {CategoryList.map((item) => (
        <div className="card-wrapper" key={item.toString()}>
          <CategoryCard category={item} />
        </div>
      ))}
      {CategoryList.map((item) => (
        <div className="card-wrapper" key={item.toString()}>
          <CategoryCard category={item} />
        </div>
      ))}
    </div>
  </div>
)

export default CategoryFullList
