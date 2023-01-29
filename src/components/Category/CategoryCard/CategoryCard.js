import React from 'react';
import { Link } from "react-router-dom";

import './category-card.scss';
const CategoryCard = (props) => {
	//? This component displays a card with a category data & link to a specific 
	//? category. The component expects a single prop, category, which is an object with
	//? three properties: link, image, and title.
	return (
		<div className='cat-card'>
			<Link className="card-link" to={props.category.link} >
				<div className="cat-card-wrapper">
					<img src={`/${props.category.image}`} alt={props.category.title} />
					<h5>{props.category.title}</h5>
				</div>
			</Link>
		</div>
	)
}

export default CategoryCard