import React, { useState, useEffect } from 'react';
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
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
        </>
    )
}

export default Search