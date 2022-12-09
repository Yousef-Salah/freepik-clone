import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import AnnualDiscount from "../components/Home/AnnualDiscount/AnnualDiscount";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import FilterSideBar from "../components/Search/FilterSideBar/FilterSideBar";
import SearchResultHeader from "../components/Search/FilterSideBar/SearchResultHeader";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Searchimgcard from "../components/Search/SearchResults/Searchimgcard";

const Search = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    props.page("search");
    loadData();
  }, [data]);


  const loadData = () => {
    setData(props.dataFilter.getData(cookies.searchInput));
  };

  return (
    <>
      <SearchContainer mainPage={false} />
      <div className="search-content">
        <SponsoredSection />
        <FilterSideBar />
        <SearchResults titel="Free Vectors" images={data} />
      </div>
    </>
  );
};

export default Search;
