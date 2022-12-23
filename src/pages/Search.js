import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import FilterSideBar from "../components/Search/FilterSideBar/FilterSideBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import SearchResults1 from '../components/Search/SearchResults/Searchcardtest';
import SearchResultHeader from "../components/Search/FilterSideBar/SearchResultHeader";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import { SideBarData1 } from "../components/Search/FilterSideBar/SideBarData1";
const TagBarData=[ {
  title: "Photos",
  pic: "bi bi-image tw-left-0",
  className: "type-class",
  className1: "type",page:'search'
},
{
  title: "PSD",
  pic: "bi bi-filetype-psd",
  className: "type-class",
  className1: "type",page:'search'
},
{
  title: "All images",
  pic: "bx bxs-shapes",
  className: "type-class",
  className1: "type",page:'search'
},
{
  title: "arrow",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "Background",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "business card",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "certificates",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "christmas",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "flower",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "frame",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "halloween",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "infographic",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
},
{
  title: "pattern",
  pic: "bx bx-search icon",
  className: "tag-class",
  className1: "tag",page:'search'
}]
const Search = (props) => {
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  }
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
      <SideBar updateOpen={updateOpen} data={SideBarData1}/>
      <div className={`search-content ${
      !open ? "base" : "pushed"
    }`} >
      <TagBar data={TagBarData} className={`${
      !open ? "base" : "pushed-tagbar"
    }`}/>
            <SearchResults images={data} title={location.pathname.split("/")[2].replace("%20", " ")}
					// closedStatus={toggleBackBack}
					/>
					<Spinner visible={spinnerTrigger} />
          <SearchResults1/>
        <Spinner visible={spinnerTrigger} />
      </div>
    </>
  );
};

export default Search;
