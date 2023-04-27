/* eslint-disable */
import React, { useState } from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoryList } from '../../../utils/Categories'

import './category-sep-list.css'
const SepList = (props) => {
  const [frontVis, setFrontVis] = useState('visible')
  const [backVis, setBackVis] = useState('hidden')
  const list = document.getElementsByClassName('sep-cat-list')[0]

  const checkScroll = () => {
    list.scrollLeft < 850 ? setFrontVis('visible') : setFrontVis('hidden')
    list.scrollLeft >= 10 ? setBackVis('visible') : setBackVis('hidden')
  }
  const scrollList = () => {
    list.scrollLeft += 300
    checkScroll()
  }
  const deScrollList = () => {
    list.scrollLeft -= 300
    checkScroll()
  }

  return (
    <div className="sep-cat">
      <h3>By {props.by || 'unknow cat'}:</h3>
      <div className="inline-f-cat sep-cat-list">
        {CategoryList.map((item, index) => {
          return (
            <div key={index}>
              <CategoryCard category={item} />
            </div>
          )
        })}
      </div>
      <div className={`btn-arrow sc-front ${frontVis}`} onClick={scrollList}>
        <button>
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
      <div className={`btn-arrow sc-back ${backVis}`} onClick={deScrollList}>
        <button>
          <i className="bi bi-arrow-left-short"></i>
        </button>
      </div>
    </div>
  )
}

export default SepList
