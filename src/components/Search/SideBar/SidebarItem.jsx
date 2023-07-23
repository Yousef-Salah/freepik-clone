import React from 'react'

const SidebarItem = ({ item, type }) => {
  const { title, icon, info } = item
  return (
    <div className={`sidebar-item ${type}`}>
      <div className="icon-title">
        <i className={`fa-solid fa-${icon}`} />
        <li className="item-title">{title}</li>
        {info && <p className="info">i</p>}
      </div>
      <div className="action-button">
        {type === 'head-item' ? (
          <i className="fa-solid fa-close" />
        ) : (
          <i className="fa-solid fa-chevron-down" />
        )}
      </div>
    </div>
  )
}

export default SidebarItem
