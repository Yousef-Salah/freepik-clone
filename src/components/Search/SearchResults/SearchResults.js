import React, { useState, useEffect } from "react";

import "./search-results.scss";
import FinalImages from "../../../utils/FinalImages.json";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "../FilterSideBar/SearchResultHeader"

const SearchResults = (props) => {

  // useEffect(() => {
  //   console.log(cookies.searchInput)
  // })


  return (
    <>
      <SearchResultHeader title="Free Vectores" />
      <div id="search-results-content" className="d-none">
        {props.images.map((item) => {
          return <Searchimgcard Cardphoto={item} />;
        })}
      </div>
    </>
  );
};

export default SearchResults;
