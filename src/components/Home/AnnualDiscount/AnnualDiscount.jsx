import React from 'react'
import { Link } from 'react-router-dom'
import './annual-discount.scss'

const AnnualDiscount = () => (
  <div className="container-fluid" id="ann-ual">
    <div className="row">
      <nav className="content">
        <span className="pragraph">
          Get goosebumps with
          <strong> 30% OFF </strong>
          <span>on the Annual Plan</span>
        </span>
        <Link to="/pricing">
          <button type="button" className="btn" id="premium-btn">
            Go Premium
          </button>
        </Link>
      </nav>
    </div>
  </div>
)
export default AnnualDiscount
