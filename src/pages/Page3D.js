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
import DataFilter from "../Helpers/DataFilter";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import FontsList from "../components/Fonts/FontsList";
import Card3D from "../components/Card3D/Card3D";
import CardLayout from "../components/Card3D/CardLayout";
const Fonts = (props) => {
  const TagBarData=[{
    title: "Photos",
  pic: "bi bi-image tw-left-0",
  className: "type-class",
  className1: "type",
},
{
  title: "PSD",
  pic: "bi bi-filetype-psd",
  className: "type-class",
  className1: "type",
},
{
  title: "All images",
  pic: "bx bxs-shapes",
  className: "type-class",
  className1: "type",
}]
  useEffect(() => {
    props.page("3d-models");
  }, [])
  let dataFilter;
  /*useEffect(() => {
    props.page("Fonts");
    dataFilter = new DataFilter(cookies.searchInput);
    loadData(10);
  }, [dataFilter])


    const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
    const [data, setData] = useState([]);

    const loadData = () => {
      setData(dataFilter.get(10));
    }

    console.log(cookies.searchInput); 
  /*}
    // removeCookie("searchInput");
        */

  return (
    <>
      {/*<SearchContainer mainPage={false} />*/}
      <div className="search-content page-3d" >
        <TagBar data={TagBarData}/>
      <SearchResultHeader title="Free Fonts"  description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
       <CardLayout/>
  </div>
      </>
  );
};

export default Fonts;
