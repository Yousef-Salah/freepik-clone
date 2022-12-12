import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import FilterSideBar from "../components/Search/FilterSideBar/FilterSideBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";

const Search = (props) => {

  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const [data, setData] = useState(props.dataFilter.getData(cookies.searchInput));
  
  useEffect(() => {
    props.page("search");   
    setTimeout(() => {
      document.getElementById("loading-spinner").style.display = "none";
      document.getElementById("search-results-content").classList.remove('d-none');
    }, 5000);
  });

  const loadData = () => {
    setData(props.dataFilter.getData(cookies.searchInput));
  };

  return (
    <>
      <SearchContainer dataHandler={loadData} mainPage={false} />
      <div className="search-content">
        <FilterSideBar />
        <SearchResults titel="Free Vectors" images={data} />
        <Spinner />
      </div>
      <SponsoredSection />
    </>
  );
};

export default Search;
