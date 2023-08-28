import React, { useState } from 'react'

const Tag = ({ name, icon, isNew }) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="tag-item-wrapper">
      <div
        className={`tag-item ${isClicked ? 'focus-tag-item' : ''}`}
        onClick={() => setIsClicked(!isClicked)}
        onKeyDown={() => setIsClicked(!isClicked)}
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
