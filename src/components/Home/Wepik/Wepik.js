import React from 'react'
import propTypes from 'prop-types'
import { wepikInfo } from './utils'

import './wepik.css'

const Wepik = () => {
  const { logoUrl, headerText, paragraphText, buttonText, photoUrl } = wepikInfo
  return (
    <div className="wepik-cont" id="wepik">
      <div className="col-6 wepik">
        <img className="wepik-logo " src={logoUrl} alt="wepik-logo" />
        <h5 className="wepik-header">{headerText}</h5>
        <h6 className="wepik-paragraph">{paragraphText}</h6>
        <button type="button" className="btn btn-primary btn-lg wepik-btn">
          {buttonText}
        </button>
      </div>
      <div className="col-6 d-lg-block wepik-photo">
        <img src={'/' + photoUrl} alt="wepik-pho" />
      </div>
    </div>
  )
}

Wepik.propTypes = {
  logoUrl: propTypes.string,
  headerText: propTypes.string,
  paragraphText: propTypes.string,
  buttonText: propTypes.string,
  photoUrl: propTypes.string
}

export default Wepik
