import React, { useState, useEffect } from "react";
import SearchResultHeader from "../components/Search/SearchResults/SearchResultHeader";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";

import DataFilter from "../Helpers/DataFilter";
import CardLayout from "../components/Card3D/CardLayout";
const Fonts = (props) => {
  const TagBarData=[{
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
}]
  useEffect(() => {
    props.page("3d-models");
  }, [])
  let dataFilter;

  return (
    <>
      {/*<SearchContainer mainPage={false} />*/}
      <div className="search-content page-3d" >
        <TagBar data={TagBarData}/>
      <SearchResultHeader title="Free 3d models"  description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
       <CardLayout/>
  </div>
      </>
  );
};

export default Fonts;
