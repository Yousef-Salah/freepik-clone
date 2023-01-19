import React, { useState, useEffect } from "react";

import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import JoinSection from "../components/Common/JoinSection/JoinSection";
import Wepik from "../components/Home/Wepik/Wepik";
import CreatorCollection from "../components/Home/CreatorCollection/CreatorCollection";
import CreatorCollectionTitle from "../components/Home/CreatorCollection/CreatorCollectionTitle";
import PromoteSiteFeatures from "../components/Home/PromoteSiteFeatures/PromoteSiteFeatures";

const Home = (props) => {
  useEffect(() => {
    props.page("home");
  }, []);

  return (
    <>
      <SearchContainer mainPage={true} searchQuery={props.searchQuery} />
      <CircleCategoy />
      <Annual />
      <Trending />

      <CreatorCollectionTitle />
      <CreatorCollection />
      <PromoteSiteFeatures />
      <JoinSection />
      <Wepik
        logoUrl="https://freepik.cdnpk.net/img/logos/wepik-colored.svg"
        headerText="Create beautiful designs online."
        paragraphText="Customize and download free templates to make stunning designs with our online editing tool."
        buttonText="Start editing online"
        photoUrl="wepikPhoto.png"
      />
    </>
  );
};

export default Home;
