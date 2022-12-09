import React, { useState, useEffect } from "react";

import "./search-results.scss";
import FinalImages from "../../../utils/FinalImages.json";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "../FilterSideBar/SearchResultHeader"

const SearchResults = (props) => {
  return (
    <>
      <SearchResultHeader title="Free Vectores" />
      <div>
        {props.images.map((item) => {
          return <Searchimgcard Cardphoto={item} />;
        })}
      </div>
    </>
  );
};

export default SearchResults;
