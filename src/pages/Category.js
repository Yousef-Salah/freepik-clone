import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategorySectionTwo from '../components/Category/CategorySection/CategorySectionTwo';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';



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
            {/* <SearchContainer mainPage={false} /> */}
            <CategoryHeader catotitle = "Cartoons are a way to give life to your creations" catodesc="People have been drawing cartoons for quite some time now. This style has evolved over time and it's now more than a humorous depiction of someone. It's very popular among children, and an interesting way of showing an image of yourself to others. It has a colorful nature and a different way of interpreting things from reality." />
            <CategoryFullList category={urlParams.term} />
            <CategorySection righText="Create and customize your own avatar for social media" rightpara ="Cartoons are not only for children. Their variety nowadays is huge and covers audiences of all ages. This style is so popular that many people love to use avatars depicting themselves in a cartoony fashion, which is a creative and fun way of introducing yourself to others. Don't be afraid of use this style on social media." />
            <CategorySectionTwo righText ="Promote children's films and TV shows with cartoony assets" rightpara="Products aimed at younger audiences require designs that are especifically thought for them. It's no surprise that toys, posters for children's films or TV series, and other producs like these resort to a more cartoony style, since it resonates very well with such an audience. Grab their attention and you'll also pique their parents interest."/> 
            <RelatedArticles/>
            <JoinSection />
            
            <ModalTrigger />
            

		</>
	)
}

export default Category