import React from 'react'
// rafce
const PricingSection = () => {
  return (
    <div className="d-flex align-items-start">

      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button classNameName="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Individual</button>
        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Teams</button>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">      <img src="pricing1.png" />
        </div>
        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"> <img src="pricing2.png" /></div>
      </div>
    </div>
  )
}

export default PricingSection