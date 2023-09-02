/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react'
import SearchQueryNew from '../../../contexts/SearchQueryNew'

const Tag = ({ tagData, tagType }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [queryContext, setQueryContext] = useState(useContext(SearchQueryNew))
  const { name, icon, isNew } = tagData
  useEffect(() => {
    if (queryContext.filterData[tagType] === name) {
      setIsClicked(true)
    } else {
      setIsClicked(false)
    }
  }, [queryContext.filterData[tagType]])

  const changeState = () => {
    const newFilerData = queryContext.filterData
    if (isClicked) {
      newFilerData[tagType] = ''
    } else {
      newFilerData[tagType] = name
    }
    console.log(newFilerData)
    queryContext.setFilterData(newFilerData)
    setIsClicked(!isClicked)
  }

  return (
    <div className="tag-item-wrapper">
      <div
        className={`tag-item ${isClicked ? 'focus-tag-item' : ''}`}
        onClick={changeState}
        onKeyDown={changeState}
        role="button"
        tabIndex={0}
      >
        {icon && <i className={`fa-solid fa-${icon}`} />}
        {name && <p className="tag-name">{name}</p>}
        {isNew && <p className="tag-new">New</p>}
      </div>
    </div>
  )
}
export default Tag
