import React from 'react'
import CreatorCollections from './CreatorCollections'
import CreatorCollectionTitle from './CreatorCollectionTitle'

const CreatorCollection = () => {
	return (
		<div id='creator-inner-col'>
			<CreatorCollectionTitle />
			<CreatorCollections />
		</div>
	)
}

export default CreatorCollection