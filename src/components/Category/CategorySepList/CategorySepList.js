import React from 'react'
import SepList from './SepList'

const CategorySepList = (props) => {
  // const [category, setCategory] = useState(props.category)

  // ? this component staticly displays the category list in a separated list.
  return (
    <div className="cat-sep-lists">
      <SepList by="color" />
      <SepList by="event" />
      <SepList by="topic" />
      <SepList by="texture/material" />
      <SepList by="style" />
    </div>
  )
}

export default CategorySepList
