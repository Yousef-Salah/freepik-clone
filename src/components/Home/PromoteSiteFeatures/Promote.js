import React from 'react'
import propTypes from 'prop-types'
import './Promote.css'
const Promote = ({ icon, heder, title }) => {
  return (
    <div className="promote-content">
      <div className="icon-box symbol">
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star">
          <path d={icon} />
        </svg>
      </div>
      <div className="promote-desc" id="paragraph">
        <div className="caption">
          <h3 className="icon-title">{heder}</h3>
          {title}
        </div>
      </div>
    </div>
  )
}

Promote.propTypes = {
  icon: propTypes.string,
  heder: propTypes.string,
  title: propTypes.string
}

export default Promote
