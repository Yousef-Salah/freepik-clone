import React, { useState } from 'react';
import SepList from './SepList'

const CategorySepList = (props) => {
	const [category, setCategory] = useState(props.category);

	return (
		<>
			<SepList by="color" />
			<SepList by="event" />
			<SepList by="topic" />
			<SepList by="texture/material" />
			<SepList by="style" />
		</>
	)
}

export default CategorySepList