import React, { useState, useEffect } from 'react';
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection"
import AnnualDiscount from '../components/Home/AnnualDiscount/AnnualDiscount';
import CircleCategoy from '../components/Home/CircleCategoy/CircleCategoy';
import FilterSideBar from '../components/Search/FilterSideBar/FilterSideBar';
import SearchResultHeader from '../components/Search/FilterSideBar/SearchResultHeader';
import SideBar from '../components/Search/FilterSideBar/SideBar';
import TagBar from '../components/Search/FilterSideBar/TagBar';
import SearchResults from '../components/Search/SearchResults/SearchResults';
import { useCookies } from "react-cookie";
import DataFilter from "../Helpers/DataFilter";
import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import FontsList from '../components/Fonts/FontsList';
import Card3D from '../components/Card3D/Card3D';
import CardLayout from '../components/Card3D/CardLayout';
const Fonts = (props) => {
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  }
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
      <SideBar updateOpen={updateOpen}/>

      <div className={`search-content ${
      !open ? "base" : "pushed"
    }`} >
      <SearchResultHeader title="Free Fonts"  description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
       <CardLayout/>
  </div>
      </>
  );
};

export default Fonts;