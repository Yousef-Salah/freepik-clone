import React, { useState, useRef } from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'
import { CategoryList } from '../../../utils/Categories'

import './category-sep-list.scss'

const SepList = ({ by }) => {
  const [frontVis, setFrontVis] = useState('visible')
  const [backVis, setBackVis] = useState('hidden')
  const [lWidth, setLWidth] = useState(0)
  const refList = useRef(null)

  const checkScroll = () => {
    setLWidth(refList.current.scrollLeft)
    if (lWidth <= 950) setFrontVis('visible')
    else setFrontVis('hidden')

    if (lWidth >= 10) setBackVis('visible')
    else setBackVis('hidden')
  }
  const scrollList = () => {
    refList.current.scrollLeft = lWidth + 300
    checkScroll()
  }
  const deScrollList = () => {
    refList.current.scrollLeft = lWidth - 300
    checkScroll()
  }

  return (
    <div className="sep-cat">
      <h3>By {by || 'unknow cat'}:</h3>
      <div className="inline-f-cat sep-cat-list" ref={refList}>
        {CategoryList.map((item) => (
          <div>
            <CategoryCard category={item} />
          </div>
        ))}
      </div>
      <div
        className={`btn-arrow sc-front ${frontVis}`}
        onClick={scrollList}
        onKeyDown={scrollList}
        role="button"
        tabIndex={-1}
      >
        <button type="button">
          <i className="bi bi-arrow-right-short" />
        </button>
      </div>
      <div
        className={`btn-arrow sc-back ${backVis}`}
        onClick={deScrollList}
        onKeyDown={deScrollList}
        role="button"
        tabIndex={0}
      >
        <button type="button">
          <i className="bi bi-arrow-left-short" />
        </button>
      </div>
    </div>
  )
}

export default SepList
