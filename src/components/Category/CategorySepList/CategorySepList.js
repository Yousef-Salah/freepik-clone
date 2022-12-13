import React, { useState, useEffect } from 'react';

import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryList from '../../../utils/CateroryList';
import './category-sep-list.css';
const CategorySepList = (props) => {
	const [category, setCategory] = useState(props.category);
	const [frontVis, setFrontVis] = useState('visible');
	const [backVis, setBackVis] = useState('hidden');
	const list = document.getElementById('sep-cat-list');

	const checkScroll = () => {
		list.scrollLeft < 850 ? setFrontVis('visible') : setFrontVis('hidden');
		list.scrollLeft >= 10 ? setBackVis('visible') : setBackVis('hidden');

	}
	const scrollList = () => {
		list.scrollLeft += 300;
		checkScroll();
	}
	const deScrollList = () => {
		list.scrollLeft -= 300;
		checkScroll();
	}

	const categoryList = CategoryList();
	return (
		<div className="sep-cat">
			<h3>By color:</h3>
			<div className='inline-f-cat' id="sep-cat-list">
				{categoryList.map((item, index) => {
					return (
						<div key={index}>
							<CategoryCard category={item} />
						</div>
					)
				}
				)}
			</div>
			<div className={`btn-arrow sc-front ${frontVis}`} onClick={scrollList}>
				<button>
					<span className='btn-arrow-icon'>
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 0L10 5L5 10L5 0Z" fill="#FFC107" />
						</svg>
					</span>
				</button>
			</div>
			<div className={`btn-arrow sc-back ${backVis}`} onClick={deScrollList}>
				<button>
					<span className='btn-arrow-icon'>
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 0L0 5L5 10L5 0Z" fill="#FFC107" />
						</svg>
					</span>
				</button>
			</div>

		</div>
	)
}

export default CategorySepList