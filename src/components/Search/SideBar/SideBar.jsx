import React from 'react'
import './sidebar.scss'
import SidebarItem from './SidebarItem'
import { filters, headItem } from './utils'

const SideBar = () => (
  <div id="sidebar">
    <div className="sidebar-head">
      <SidebarItem item={headItem} type="head-item" />
    </div>
    <div className="sidebar-body">
      <div className="filters-list">
        {filters.map((item) => (
          <SidebarItem item={item} type="filter-item" />
        ))}
      </div>
    </div>
  </div>
)

export default SideBar
