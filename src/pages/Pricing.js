import React, { useState, useEffect } from 'react';
import PricingSection from '../components/Pricing/PricingSection/PricingSection';
//import Enhance from './components/Pricing/PricingSection/Enhance/Enhance';
import Enhance from '../Enhance/Enhance';

const Pricing = (props) => {

    //useEffect(() => {props.page("pricing")}, [])
    return (
        <div className='pricing-wrapper'>
            <PricingSection />
            <Enhance/>
        </div>
    )
}

export default Pricing;