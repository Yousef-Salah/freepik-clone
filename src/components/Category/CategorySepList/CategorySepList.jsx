import React from 'react'
import SepList from './SepList'

const CategorySepList = () => (
  <div className="cat-sep-lists">
    <SepList by="color" />
    <SepList by="event" />
    <SepList by="topic" />
    <SepList by="texture/material" />
    <SepList by="style" />
  </div>
)

export default CategorySepList
