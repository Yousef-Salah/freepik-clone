import React, { useState, useEffect } from 'react';
import PricingSection from '../components/Pricing/PricingSection/PricingSection';
const Pricing = (props) => {

	useEffect(() => {
		props.page("pricing")
	}, [])
	return (
		<div className='pricing-wrapper'>
			<PricingSection />
		</div>
	)
}

export default Pricing