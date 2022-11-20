import React, { useState, useEffect } from 'react';


import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import InnerCreation from "../components/Home/InnerCreation/InnerCreation";
import JoinSection from "../components/Common/JoinSection/JoinSection";

const Home = (props) => {

    useEffect(() => {
        props.page("home")
    }, [])

    return (
        <>
            <SearchContainer />
            <CircleCategoy />
            <Annual />
            <Trending />
            <InnerCreation />
            <JoinSection />
        </>
    )
}

export default Home