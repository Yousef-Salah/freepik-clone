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
import FontsGridView from '../components/Fonts/FontsGridView';
const Fonts = (props) => {
  const SideBarData=[{
    collapse:'Type',icon:'bi bi-type',icon1:[],tag:1,tags:['All','Serif','Sans Serif','Display','Slab serif','Script','Monospace'],id:'typeCollapse'
  }]
  const TagBarData=[{
    title: "All fonts",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Funny",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Happy",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Creative",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Retro",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Brush",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Calligraphy",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Comic",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Wedding",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Halloween",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Summer",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Fall",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Latin",
    className: "tag-class",
    className1: "tag"
  },{
    title: "Vintage",
    className: "tag-class",
    className1: "tag"
  }
]
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  }
  useEffect(() => {
    props.page("Fonts");
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
      <SideBar updateOpen={updateOpen} data={SideBarData}/>

      <div className={`fonts-page fonts-grid-page ${
      !open ? "base" : "pushed"
    }`} >
      <TagBar data={TagBarData} className={`${
      !open ? "base" : "pushed-tagbar"
    }`}/>
      <SearchResultHeader title="Free Fonts"  description='Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!'/>
      <FontsGridView/>

       
  </div>
      </>
  );
};

export default Fonts;