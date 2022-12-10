import React from 'react'
// rafce
import './pricing.css';
const PricingSection = () => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-individual" role="tabpanel" aria-labelledby="pills-individual-tab"><img src='pricing1.png' alt='pricing-photo1' /></div>
      <div className="tab-pane fade" id="pills-teams" role="tabpanel" aria-labelledby="pills-teams-tab"><img src='pricing2.png' alt='pricing-photo2' /></div>

      <div className='btn-pricing'>
        <ul className="nav nav-pills mb-6" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-individual-tab" data-bs-toggle="pill" data-bs-target="#pills-individual" type="button" role="tab" aria-controls="pills-individual" aria-selected="true">Individual</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-teams-tab" data-bs-toggle="pill" data-bs-target="#pills-teams" type="button" role="tab" aria-controls="pills-teams" aria-selected="false">Teams</button>
          </li>
        </ul>

      </div>
      <div className="tab-pane fade show active" id="pills-individual" role="tabpanel" aria-labelledby="pills-individual-tab"></div>
      <div className="tab-pane fade" id="pills-teams" role="tabpanel" aria-labelledby="pills-teams-tab"><img src='pricing2.png' alt='pricing-photo2' /></div>

    </div>


  )
}

export default PricingSection