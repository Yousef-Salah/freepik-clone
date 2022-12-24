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

		</section >

	)
}
export default CategorySection