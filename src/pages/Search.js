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
import DataFilter from "../Helpers/DataFilter";
import DataBase from "../utils/FinalImages.json";

const Search = (props) => {

  let dataFilter;

    useEffect(() => {
        props.page("search");
        dataFilter = DataFilter(cookies.searchInput);
        loadData();
    }, [dataFilter])


    const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
    const [data, setData] = useState([]);

    const loadData = () => {
      // setData(dataFilter.get());

      let filteredData = DataBase.slice(0,10);
      setData(filteredData);
    }

    console.log(cookies.searchInput);
    // removeCookie("searchInput");

    return (
        <div className="search-content">
            <SponsoredSection />
            <FilterSideBar />
            <SearchResultHeader title='Free Vectors' />
            <SearchResults data={data}/>
        </div>
    )
}

export default Search