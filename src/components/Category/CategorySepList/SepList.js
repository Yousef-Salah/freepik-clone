import React, { useState, useEffect } from 'react';

import CategoryCard from '../CategoryCard/CategoryCard'
import CategoryList from '../../../utils/CateroryList';
import './category-sep-list.css';
const SepList = (props) => {
	const [category, setCategory] = useState(props.category);
	const [frontVis, setFrontVis] = useState('visible');
	const [backVis, setBackVis] = useState('hidden');
	const list = document.getElementById('sep-cat-list');

	const checkScroll = () => {
		list.scrollLeft < 850 ? setFrontVis('visible') : setFrontVis('hidden');
		list.scrollLeft >= 10 ? setBackVis('visible') : setBackVis('hidden');
		console.log(list.offsetWidth, list.scrollLeft)
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
					<i class="bi bi-arrow-right-short"></i>
				</button>
			</div>
			<div className={`btn-arrow sc-back ${backVis}`} onClick={deScrollList}>
				<button>
					<i class="bi bi-arrow-left-short"></i>

				</button>
			</div>

		</div>
	)
}

export default SepList