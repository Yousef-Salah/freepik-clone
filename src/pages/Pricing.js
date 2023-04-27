import React from 'react'
import PricingSection from '../components/Pricing/PricingSection/PricingSection'

import Enhance from '../components/Pricing/Enhance/Enhance'
// import MainLayout from '../components/Layouts/MainLayout'

const Pricing = (props) => {
  // useEffect(() => {props.page("pricing")}, [])
  return (
    <>
      {/* <MainLayout page={props.page} pageTitle="Pricing"> */}
      <div className="pricing-wrapper">
        <PricingSection />
        <Enhance />
      </div>
      {/* </MainLayout> */}
    </>
  )
}

export default Pricing
