import React, { useState, useEffect } from 'react';
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
import AnnualDiscount from '../components/Home/AnnualDiscount/AnnualDiscount';
import CircleCategoy from '../components/Home/CircleCategoy/CircleCategoy';
import FilterSideBar from '../components/Search/FilterSideBar/FilterSideBar';
import SearchResultHeader from '../components/Search/FilterSideBar/SearchResultHeader';
import SideBar from '../components/Search/FilterSideBar/SideBar';
import TagBar from '../components/Search/FilterSideBar/TagBar';
import SearchResults from '../components/Search/SearchResults/SearchResults';
import DataFilter from "../Helpers/DataFilter";
import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import FontsGridView from '../components/Fonts/FontsGridView';
import FontsList from '../components/Fonts/FontsList';

const FontsFormatGrid = (props) => {

    return (
        <>
          {/*<SearchContainer mainPage={false} />*/}
      <div className="search-content">
        <FilterSideBar />
        <SearchResultHeader title="Free Fonts" description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
        <FontsGridView/>
      </div>
        </>
)
};

export default FontsFormatGrid;