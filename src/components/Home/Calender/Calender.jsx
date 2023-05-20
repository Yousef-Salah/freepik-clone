import React from 'react'
import { Link } from 'react-router-dom'

import './calender.scss'

const Calender = () => (
  <div id="calender">
    <div className="cal-wrapper">
      <div className="cal-info">
        <p className="cal-subtitle">The year of the rabbit has come</p>
        <h3 className="cal-title">
          Hop on for
          <span className="gold-text">Chinese New Year</span>
          with Freepik
        </h3>
        <Link to="calender" className="cal-btn">
          Celebrate now
        </Link>
      </div>
      <div className="cover-image">
        <div className="cover-wrapper">
          <img src="assets/images/home/calender/cover.webp" alt="caover-img" />
        </div>
      </div>
    </div>
  </div>
)
export default Calender
