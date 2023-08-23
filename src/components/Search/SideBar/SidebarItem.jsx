import React, { useState } from 'react'
import Tag from './Tag'

const SidebarItem = ({ item, type }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { title, icon, info, tags } = item
  return (
    <div className={`sidebar-item ${type}`}>
      <div className="sidebar-item-head">
        <div className="icon-title">
          <i className={`fa-solid fa-${icon}`} />
          <li className="item-title">{title}</li>
          {info && <p className="info">i</p>}
        </div>
        <div className="action-button">
          {type === 'head-item' ? (
            <i className="fa-solid fa-close" />
          ) : (
            <div
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={() => setIsOpen(!isOpen)}
              role="button"
              tabIndex={0}
            >
              <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`} />
            </div>
          )}
        </div>
      </div>
      <div className="sidebar-item-body">
        {isOpen && (
          <div className="tags-list">
            {tags.map((tag) => (
              <Tag name={tag.name} icon={tag.icon} isNew={tag.isNew} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
