import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import FilterSideBar from "../components/Search/FilterSideBar/FilterSideBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";

const Search = (props) => {

  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const [data, setData] = useState([]);
  const [spinnerTrigger, setSpinnerTrigger] = useState(true);
  const [contentState, setContentState] = useState(true);

  useEffect(() => {
    props.page("search");
    console.log(props.searchQuery)
  }, [spinnerTrigger]);

  const loadData = () => {
    setData(props.dataFilter.getData(props.searchQuery));
    setContentState(false);
    setSpinnerTrigger(true);
    setTimeout(() => {
      setSpinnerTrigger(false);
      setContentState(true);
    }, 1500);
  };

  return (
    <>
      <SearchContainer dataHandler={loadData} mainPage={false} setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
      <div className="search-content">
        <FilterSideBar />
        <SearchResults images={data} visible={contentState} />
        <Spinner visible={spinnerTrigger} />
      </div>
      <SponsoredSection />
    </>

  );
};

export default Search;
