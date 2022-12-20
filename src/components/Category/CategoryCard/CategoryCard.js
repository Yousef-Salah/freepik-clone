import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './category-card.scss';

const CategoryCard = (props) => {

	useEffect(() => {
	}, [props])
	return (

		<div className='cat-card'>
			<Link className="card-link" to={props.category.link} >
				<div className="cat-card-wrapper">
					<img src={require(`../../../${props.category.image}`)} alt="cat-img" />
					<h5>{props.category.title}</h5>
				</div>
			</Link>

		</div>

	)
}

export default CategoryCard