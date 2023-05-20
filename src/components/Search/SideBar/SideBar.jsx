import React, { useState } from 'react'
const SideBar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <button style={{ width: !isOpen ? 'visible' : 'hidden' }} onClick={toggle}>
        Filters
        <div className="bi bi-sliders" />
      </button>
    </>
  )
}

export default SideBar
