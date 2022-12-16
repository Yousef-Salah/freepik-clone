import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import FilterSideBar from "../components/Search/FilterSideBar/FilterSideBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import DataFilter from "../Helpers/DataFilter";
import SearchResults1 from '../components/Search/SearchResults/Searchcardtest';
import SearchResultHeader from "../components/Search/FilterSideBar/SearchResultHeader";

const Search = (props) => {

  const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
  const [data, setData] = useState(props.dataFilter.getData(cookies.searchInput));
  const [spinnerTrigger, setSpinnerTrigger] = useState(true);

  useEffect(() => {
    props.page("search");
  }, [spinnerTrigger]);

  const loadData = () => {
    setData(props.dataFilter.getData(cookies.searchInput));
    document.getElementById("search-results-content").classList.add('d-none');
    setSpinnerTrigger(true);
    setTimeout(() => {
      document.getElementById("search-results-content").classList.remove('d-none');
      setSpinnerTrigger(false);
    }, 3000);
  };

  return (
    <> 
    <SponsoredSection />
      <SearchContainer dataHandler={loadData} mainPage={false} />
      <div className="search-content">
        <FilterSideBar />
        <SearchResults images={data} />
        <Spinner visible={spinnerTrigger} />
      </div>
    </>
  );
};

export default Search;
