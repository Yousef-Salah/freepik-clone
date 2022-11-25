import React, { useState, useEffect } from 'react';
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
import AnnualDiscount from '../components/Home/AnnualDiscount/AnnualDiscount';
import CircleCategoy from '../components/Home/CircleCategoy/CircleCategoy';
import InnerCreation from '../components/Home/InnerCreation/InnerCreation';
import FilterSideBar from '../components/Search/FilterSideBar/FilterSideBar';
import SearchResultHeader from '../components/Search/FilterSideBar/SearchResultHeader';
import SideBar from '../components/Search/FilterSideBar/SideBar';
import TagBar from '../components/Search/FilterSideBar/TagBar';
const Search = (props) => {

    useEffect(() => {
        props.page("search")
    }, [])

    return (
        <>
            <SponsoredSection />
            <FilterSideBar/>
            <SearchResultHeader title='Free Vectors'/>
            <CircleCategoy/>
            <AnnualDiscount/>
             <InnerCreation/>
           
        </>
    )
}

export default Search