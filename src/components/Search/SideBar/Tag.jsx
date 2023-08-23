import React from 'react'

const Tag = ({ name, icon, isNew }) => (
  <div className="tag-item-wrapper">
    <div className="tag-item">
      {icon && <i className={`fa-solid fa-${icon}`} />}
      {name && <p className="tag-name">{name}</p>}
      {isNew && <p className="tag-new">New</p>}
    </div>
  </div>
)

export default Tag
