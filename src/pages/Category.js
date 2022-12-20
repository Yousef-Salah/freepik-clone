import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';


import CardHeader from '../components/Category/CategorySection/CategorySection';
import HeaderWithPargraph from '../components/Category/CategoryHeader/CategoryHeader';
import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import JoinSection from '../components/Common/JoinSection/JoinSection'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList';
import { PreviewModal, ModalTrigger} from '../components/Category/PreviewModal/ModalTrigger';
import RelatedArticles from '../components/Category/RelatedArticles/RelatedArticles';
const Category = (props) => {
	const urlParams = useParams();

    useEffect(() => {
        props.page("category")
    }, [])
    
    return (
        <>
            <SearchContainer mainPage={false} />
            <CategoryHeader />
            <CategoryFullList category={urlParams.term} />
            <CategorySection  RightPargraph="Products aimed at younger audiences require designs that are especifically thought for them.
							It's no surprise that toys, posters for children's films or TV series
							, and other producs like these resort to a more cartoony style
							, since it resonates very well with such an audience. Grab their attention and you'll also pique their parents' interest" />
            <RelatedArticles/>
            <JoinSection />
            
            <ModalTrigger />
            

		</>
	)
}

export default Category