import React from 'react'

const SidebarHeadItem = ({ item }) => {
  const { title, icon, info } = item

  return (
    <div className="sidebar-item head-item">
      <div className="sidebar-item-head">
        <div className="icon-title">
          <i className={`fa-solid fa-${icon}`} />
          <li className="item-title">{title}</li>
          {info && <p className="info">i</p>}
        </div>
        <div className="action-button"> </div>
      </div>
    </div>
  )
}

export default SidebarHeadItem
