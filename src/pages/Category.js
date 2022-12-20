import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';

import JoinSection from '../components/Common/JoinSection/JoinSection'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList';
import ModalTrigger from '../components/Category/PreviewModal/ModalTrigger';
import RelatedArticles from '../components/Category/RelatedArticles/RelatedArticles';
import CategorySepList from '../components/Category/CategorySepList/CategorySepList';

const Category = (props) => {
	//? didnt work with useParams() in useState
	// const [catParam, setCatParam] = useState(useParams().term);
	const [cat, setCat] = useState(props.catStyle);
	let catParam = useParams().term;

	function isAlpaUpper(char) {
		const charCode = char.charCodeAt(0);
		return charCode >= 'a'.charCodeAt(0) && charCode <= 'c'.charCodeAt(0);
	}

	useEffect(() => {
		props.page("category")
		isAlpaUpper(catParam[0]) ? setCat("style_sep") : setCat("style_full")
	}, [catParam])

	return (
		<>
			<CategoryHeader />
			{cat === "style_full" ? <CategoryFullList category={catParam} />
				:
				<CategorySepList category={catParam} />}
			<CategorySection />
			<RelatedArticles />
			<JoinSection />
			<ModalTrigger />
		</>
	)
}

export default Category