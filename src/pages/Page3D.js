import React, { useState, useEffect } from "react";
import SearchResultHeader from "../components/Search/SearchResults/SearchResultHeader";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import DataFilter from "../Helpers/DataFilter";
import CardLayout from "../components/Card3D/CardLayout";
import TagBarData3D from "../utils/TagBarData3D";
import MainLayout from "../components/Layouts/MainLayout";
const Fonts = (props) => {

  useEffect(() => {
    props.page("3d-models");
  }, [])
  let dataFilter;

  return (
    <>
    <MainLayout page={props.page}>
      {/*<SearchContainer mainPage={false} />*/}
      <div className="search-content page-3d" >
        <TagBar data={TagBarData3D}/>
      <SearchResultHeader title="Free 3d models"  description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
       <CardLayout/>
  </div>
    </MainLayout>
      </>
  );
};

export default Fonts;
