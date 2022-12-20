import React, { useState, useEffect } from 'react';
import './category-section.css'


const CategorySection = (props) => {
	return (
		<section id="iamge-card-text">

			<div className="row">
				<div className="rightPargraph">
					<div className="content">
						<h3>{props.righText}</h3>
						<p>{props.rightpara}</p>
					</div>
				</div>
				<div className="leftPhotoCard">
					<img src={require('./Sectionimg2.png')} alt="not found" />
					{/* {props.image} */}
				</div>




				



			</div>
		</section>

	)
}
export default CategorySection