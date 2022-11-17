import React, { useState, useEffect } from 'react';


import TagBar from "../components/Search/FilterSideBar/FilterSideBar"
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
const Search = (props) => {

    useEffect(() => {
        props.page("search")
    }, [])

    return (
        <>
            <SponsoredSection />
            <TagBar />
        </>
    )
}

export default Search