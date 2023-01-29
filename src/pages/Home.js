import React, { useState, useEffect } from "react";

import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import JoinSection from "../components/Common/JoinSection/JoinSection";
import Wepik from "../components/Home/Wepik/Wepik";
import CreatorCollection from "../components/Home/CreatorCollection/CreatorCollection";
import CreatorCollectionTitle from "../components/Home/CreatorCollection/CreatorCollectionTitle";
import Navbar from "../components/Layouts/Navbar/Navbar";
import Footer from "../components/Layouts/Footer/Footer";
import PromoteSiteFeatures from "../components/Home/PromoteSiteFeatures/PromoteSiteFeatures";
import Calender from "../components/Home/Calender/Calender";
import DocumentTitleHandler from "../components/Common/DocumentTitleHandler";
const Home = (props) => {
  useEffect(() => {
    props.page("home");
  }, []);

  return (
    <>
      <header id="main-page-header">
        <Navbar page={"home"} />
        <SearchContainer mainPage={true} searchQuery={props.searchQuery} />
        <CircleCategoy />
      </header>
      <Annual />
      <Trending />
      <CreatorCollection />
      <PromoteSiteFeatures />
      <JoinSection />
      <Calender />
      <Wepik
        logoUrl="https://freepik.cdnpk.net/img/logos/wepik-colored.svg"
        headerText="Create beautiful designs online."
        paragraphText="Customize and download free templates to make stunning designs with our online editing tool."
        buttonText="Start editing online"
        photoUrl="assets/images/wepik-section/wepikPhoto.png"
      />
      <Footer />
    </>
  );
};

export default Home;

