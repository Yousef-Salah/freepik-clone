import React from 'react'
import './sidebar.scss'
import SidebarItem from './SidebarItem'
import { filters, headItem } from './utils'
import SidebarHeadItem from './SidebarHeadItem'

const SideBar = () => (
  <div id="sidebar">
    <div className="sidebar-head">
      <SidebarHeadItem item={headItem} />
    </div>
    <div className="sidebar-body">
      <div className="filters-list">
        {filters.map((item) => (
          <SidebarItem item={item} />
        ))}
      </div>
    </div>
  </div>
)

export default SideBar
