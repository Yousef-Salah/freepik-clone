import React from 'react'

import './category-full-list.scss'
import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoryList } from '../../../utils/Categories'
const CategoryFullList = (props) => {
  // const [category, setCategory] = useState(props.category)

  // ? using the map() method to iterate over an array (CategoryList).
  // ? The CategoryCard component is being passed a prop called category,
  // ? which is set to the current element in the categoryList array.
  // ? the style of this list is set to display all the cards (full content).
  return (
    <div className="cat-full-list">
      <div className="full-list-wrapper">
        {CategoryList.map((item, index) => {
          return (
            <div className="card-wrapper" key={index}>
              <CategoryCard category={item} />
            </div>
          )
        })}
        {CategoryList.map((item, index) => {
          return (
            <div className="card-wrapper" key={index}>
              <CategoryCard category={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default CategoryFullList
