import React from 'react'
import { Link } from 'react-router-dom'

import './category-card.scss'

const CategoryCard = ({ category }) => (
  <div className="cat-card">
    <Link className="card-link" to={category.link}>
      <div className="cat-card-wrapper">
        <img src={`/${category.image}`} alt={category.title} />
        <h5>{category.title}</h5>
      </div>
    </Link>
  </div>
)

export default CategoryCard
