import React, { useState, useEffect } from 'react';


import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import JoinSection from "../components/Common/JoinSection/JoinSection";
import Promote from '../components/Home/PromoteSiteFeatures/Promote';
import Wepik from '../components/Home/Wepik/Wepik';

import CreatorCollection from "../components/Home/CreatorCollection/CreatorCollection";
import DiscoverCollections from '../components/Collections/DiscoverCollection/DiscoverCollections';
const Home = (props) => {

    useEffect(() => {
        props.page("home")
    }, [])

    return (
        <>
            <SearchContainer mainPage />
            <CircleCategoy />
            <Annual />
            <Trending />
            <CreatorCollection/>
            <DiscoverCollections/>
            <Promote/>
            <JoinSection />
            <Wepik />


        </>
    )
}

export default Home