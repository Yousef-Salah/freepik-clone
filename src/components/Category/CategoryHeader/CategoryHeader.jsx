import React from 'react'
import './category-header.scss'

const CategoryHeader = ({ title, desc }) => (
  <div id="category-header">
    <div className="left-card-image">
      <img
        src="/assets/images/categories/category-page/leftimg.png"
        alt="head-img1"
      />
    </div>
    <div className="header-desc">
      <h1 className="head-cat-title">{title}</h1>
      <p className="descreption">{desc}</p>
    </div>
    <div className="right-card-image">
      <img
        src="/assets/images/categories/category-page/rightimg.png"
        alt="head-img2"
      />
    </div>
  </div>
)

export default CategoryHeader
