import React, { useState, useEffect } from 'react';
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
import AnnualDiscount from '../components/Home/AnnualDiscount/AnnualDiscount';
import CircleCategoy from '../components/Home/CircleCategoy/CircleCategoy';
import InnerCreation from '../components/Home/InnerCreation/InnerCreation';
import FilterSideBar from '../components/Search/FilterSideBar/FilterSideBar';
import SearchResultHeader from '../components/Search/FilterSideBar/SearchResultHeader';
import SideBar from '../components/Search/FilterSideBar/SideBar';
import TagBar from '../components/Search/FilterSideBar/TagBar';
import SearchResults from '../components/Search/SearchResults/SearchResults';
import { useCookies } from "react-cookie";


const Search = (props) => {

    useEffect(() => {
        props.page("search")
    }, [])

    const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
    
    console.log(cookies.searchInput);
    // removeCookie("searchInput");

    return (
        <div className="search-content">
            <SponsoredSection />
            <FilterSideBar />
            <SearchResultHeader title='Free Vectors' />
            <SearchResults />
        </div>
    )
}

export default Search