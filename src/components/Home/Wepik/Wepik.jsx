import React from 'react'
import { Link } from 'react-router-dom'
import { wepikInfo } from './wepik.utils'
import './wepik.scss'

const Wepik = () => {
  const { logoUrl, headerText, paragraphText, buttonText, photoUrl } = wepikInfo
  return (
    <div className="wepik-cont" id="wepik">
      <div className="col-6 wepik">
        <img className="wepik-logo" src={logoUrl} alt="wepik-logo" />
        <h5 className="wepik-header">{headerText}</h5>
        <h6 className="wepik-paragraph">{paragraphText}</h6>
        <Link to="/search/backgrounds">
          <button type="button" className="btn btn-primary btn-lg wepik-btn">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="col-6 d-lg-block wepik-photo">
        <img src={`/${photoUrl}`} alt="wepik-pho" />
      </div>
    </div>
  )
}

export default Wepik
