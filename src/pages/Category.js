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
const Category = (props) => {
	const urlParams = useParams();

	useEffect(() => {
		props.page("category")
	}, [])

	return (
		<>
     		{/*<SearchContainer mainPage={false} />*/}
			<CategoryHeader />
			<CategoryFullList category={urlParams.term} />
			<CategorySepList category={urlParams.term} />
			<CategorySection />
			<RelatedArticles />
			<JoinSection />
			<ModalTrigger />
		</>
	)
}

export default Category