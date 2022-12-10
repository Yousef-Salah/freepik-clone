import React, { useState, useEffect } from 'react';
import './category-section.css'


const CategorySection = (props) => {
	console.log(props.image)
	return (
		<section id="iamge-card-text">

			<div className="row">
				<div className="rightPargraph">
					<div className="content">
						<h3>Promote children's films and TV shows with cartoony assets</h3>
						<p> Products aimed at younger audiences require designs that are especifically thought for them.
							It's no surprise that toys, posters for children's films or TV series
							, and other producs like these resort to a more cartoony style
							, since it resonates very well with such an audience. Grab their attention and you'll also pique their parents' interest. </p>
					</div>
				</div>
				<div className="leftPhotoCard">
					<img src={require('./pnada.jpg')} alt="not found" />
					{/* {props.image} */}
				</div>
				<div className="leftPhotoCard">
					<img src={require('./pnada.jpg')} alt="not found" />
				</div>
				<div className="rightPargraph">
					<div className="content">
						<h3>Promote children's films and TV shows with cartoony assets</h3>
						<p> Products aimed at younger audiences require designs that are especifically thought for them.
							It's no surprise that toys, posters for children's films or TV series
							, and other producs like these resort to a more cartoony style
							, since it resonates very well with such an audience. Grab their attention and you'll also pique their parents' interest. </p>
					</div>
				</div>



			</div>
		</section>

	)
}
export default CategorySection