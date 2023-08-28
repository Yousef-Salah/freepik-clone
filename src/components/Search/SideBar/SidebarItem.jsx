import React, { useState } from 'react'
import Tag from './Tag'

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { title, icon, info, tags } = item

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sidebar-item filter-item">
      <div
        className="sidebar-item-head"
        onClick={changeState}
        onKeyDown={changeState}
        role="button"
        tabIndex={0}
      >
        <div className="icon-title">
          <i className={`fa-solid fa-${icon}`} />
          <li className="item-title">{title}</li>
          {info && <p className="info">i</p>}
        </div>
        <div className="action-button">
          <div>
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`} />
          </div>
        </div>
      </div>
      <div className="sidebar-item-body">
        {isOpen && (
          <div className="tags-list">
            {tags &&
              tags.map((tag) => (
                <Tag name={tag.name} icon={tag.icon} isNew={tag.isNew} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
