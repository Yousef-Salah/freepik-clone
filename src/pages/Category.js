import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategorySectionTwo from '../components/Category/CategorySection/CategorySectionTwo';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';

import JoinSection from '../components/Common/JoinSection/JoinSection'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList';
import ModalTrigger from '../components/Category/PreviewModal/ModalTrigger';
import RelatedArticles from '../components/Category/RelatedArticles/RelatedArticles';
import CategorySepList from '../components/Category/CategorySepList/CategorySepList';
import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import chosing from "../assets/images/Related-Articles/choosing-consistent.jpg";
import Great from "../assets/images/Related-Articles/Great-PowerPoint.jpg";
import Cover from "../assets/images/Related-Articles/VideoCalls_Cover.jpg";

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

			<SearchContainer mainPage={false} page='category' setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
			<CategoryHeader catotitle="The best backgrounds for your projects" catodesc="All your drawings, illustrations and compositions are not standing on thin air, right? There's scenery, something that tells everyone where your creation takes place. That's the background, probably one of the most important elements that make everything feel complete. A background is also a nice decorative touch, especially in slideshows, flyers, and other projects." />
			{cat === "style_full" ? <CategoryFullList category={catParam} />
				:
				<CategorySepList category={catParam} />}
			<CategorySection />
			<div className="row related-articles ">
				<div><p className='Related-articles-title'>
                <h3>Related articles</h3>
            </p></div>
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

export default Category;