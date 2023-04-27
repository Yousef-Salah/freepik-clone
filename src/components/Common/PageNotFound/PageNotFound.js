import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import './not-found.css'
// import errImg from '/as'
const PageNotFound = (props) => {
  useEffect(() => {
    // props.page('error')
  }, [])

  return (
    <div className="not-found_bg">
      <div className="not-found-main">
        <div className="heading">
          <h2 className="not-found_title">ERROR</h2>
          <h1 className="element404">
            <img src="/assets/common/not_found/404_s.svg" alt="404" />
          </h1>
          <h2 className="not-found_title">This page is outside of the universe</h2>
          <p className="error-para">
            The page you are trying to access doesn’t exist or has been moved. Try going back to our
            homepage.
          </p>
          <Link to="/">
            <button className="go-home-btn">Go to homepage</button>
          </Link>
        </div>
        <h6 className="error-footer">
          If you think this is an error, contact our support team at{' '}
          <span className="blue-text"> support@freepik.com?subject=Error%20404</span>
        </h6>
      </div>
    </div>
  )
}

export default PageNotFound
