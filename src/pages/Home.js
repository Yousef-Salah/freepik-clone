import React, { useState, useEffect } from 'react';


import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import InnerCreation from "../components/Home/InnerCreation/InnerCreation";
import JoinSection from "../components/Common/JoinSection/JoinSection";
import Promote from '../components/Home/PromoteSiteFeatures/Promote';
import CreatorCollection from '../components/Home/CreatorCollection/CreatorCollection';

const Home = (props) => {

    useEffect(() => {
        props.page("home")
    }, [])

    return (
        <>
            <SearchContainer mainPage={true} />
            <CircleCategoy />
            <Annual />
            <Trending />
            <CreatorCollection/>
            <InnerCreation />
            <Promote/>
            <JoinSection />
            
        </>
    )
}

export default Home