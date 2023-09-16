/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react'
import SearchQueryNew from '../../../contexts/SearchQueryNew'

const Tag = ({ tagData, tagType }) => {
  const [isClicked, setIsClicked] = useState(false)
  const { filterData, setFilterData } = useContext(SearchQueryNew)
  const { name, icon, isNew } = tagData

  useEffect(() => {
    if (isClicked) {
      if (filterData[tagType] !== name) {
        setIsClicked(false)
      }
    }
  }, [filterData])

  const toggleItemStatus = () => {
    setIsClicked(true)
    updateContext()
  }

  const updateContext = () => {
    if (!isClicked) {
      setFilterData({ ...filterData, [tagType]: name })
    }
  }

  return (
    <div className="tag-item-wrapper">
      <div
        className={`tag-item ${isClicked ? 'focus-tag-item' : ''}`}
        onClick={toggleItemStatus}
        onKeyDown={toggleItemStatus}
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
