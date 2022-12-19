import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';


import CardHeader from '../components/Category/CategorySection/CategorySection';
import HeaderWithPargraph from '../components/Category/CategoryHeader/CategoryHeader';
import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import JoinSection from '../components/Common/JoinSection/JoinSection'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList';
import { PreviewModal, ModalTrigger } from '../components/Category/PreviewModal/ModalTrigger';
import RelatedArticles from '../components/Category/RelatedArticles/RelatedArticles';
import CategorySepList from '../components/Category/CategorySepList/CategorySepList';
import chosing from "../components/Category/RelatedArticles/choosing-consistent.jpg";
import Great from "../components/Category/RelatedArticles/Great-PowerPoint.jpg";
import Cover from "../components/Category/RelatedArticles/VideoCalls_Cover.jpg";
const Category = (props) => {
	const urlParams = useParams();

	useEffect(() => {
		props.page("category")
	}, [])

	return (
		<>
     		{/*<SearchContainer mainPage={false} />*/}
			<CategoryHeader />
			{/* <CategoryFullList category={urlParams.term} /> */}
			<CategorySepList category={urlParams.term} />
			<CategorySection />
			{/* -12 col-md-10 col-lg-6 col-xl-4 col-xxl-3 */}
		    <div className="row related-articles ">
				<div className='col-3 related-articles '>
			<RelatedArticles title="Video call backgrounds: change your meeting’s look"
			heder="The year 2020 kept everyone separated. Even though many people thought that 2021 was going to be different,..."
			image={Cover} />
			</div>
			<div className='col-3 related-articles '>
			<RelatedArticles title="10 tips for a great powerpoint presentation"
			heder="Today it is not enough for a successful performance just to tell about your idea. People certainly want to see,..."
			image={Great} />
			</div>
			<div className='col-3 related-articles'>
			<RelatedArticles title="Tips for choosing consistent images for your designs"
			heder="One of the fundamental elements of graphic design is consistency. No matter what article, design book, workshop,..."
			image={chosing} />
			</div>
			</div>
			<JoinSection />
			<ModalTrigger />
		</>
	)
}

export default Category