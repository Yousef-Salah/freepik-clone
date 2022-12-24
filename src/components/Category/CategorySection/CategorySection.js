import React, { useState, useEffect } from 'react';
import './category-section.css'
import utils from './utils'

const CategorySection = (props) => {

	const [sections, setSections] = useState(utils());
	console.log(props.image)
	return (
		<section id="iamge-card-text">
			{/* dynamic content */}
			{sections.map((item, index) => {
				return (
					<>
						{(index % 2) === 0 ?
							(
								<div className="row" key={index} >
									<div className="rightPargraph">
										<div className="content">
											<h3>{item.title}</h3>
											<p>{item.desc}</p>
										</div>
									</div>
									<div className="leftPhotoCard">
										<img src={item.img} alt="not found" />
									</div>
								</div>
							)
							:
							(
								<div className="row" key={index} >
									<div className="leftPhotoCard">
										<img src={item.img} alt="not found" />
									</div>

									<div className="rightPargraph">
										<div className="content">
											<h3>{item.title}</h3>
											<p>{item.desc}</p>
										</div>
									</div>
								</div>
							)
						}
					</>
				)
			})}
			{/* end of dynamic content */}

			{/* static content */}
			{/* <div className="row">
				<div className="rightPargraph">
					<div className="content">
						<h3>{props.righText}</h3>
						<p>{props.rightpara}</p>
					</div>
				</div>
				<div className="leftPhotoCard">

					<img src={require('./pnada.jpg')} alt="not found" />
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
			</div> */}
			{/* end of static content */}
		</section >

	)
}
export default CategorySection