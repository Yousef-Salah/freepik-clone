import React, { useState, useEffect } from "react";
import DiscoverCollections from "../components/Collections/DiscoverCollection/DiscoverCollections";
import DiscoverCollectionTitle from "../components/Collections/DiscoverCollection/DiscoverCollectionsTitle";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import MainLayout from '../components/Layouts/MainLayout';

const Collections = (props) => {
  const [data, setData] = useState([]);
  const [spinnerTrigger, setSpinnerTrigger] = useState(true);
  const [contentState, setContentState] = useState(true);
  useEffect(() => {
    props.page("Collection");
  }, []);

  const loadData = () => {
    setData(props.dataFilter.getData(props.searchQuery.current));
    setContentState(false);
    setSpinnerTrigger(true);
    setTimeout(() => {
      setSpinnerTrigger(false);
      setContentState(true);
    }, 1500);
  };
  return (
    
    <MainLayout page={props.page}>
      <SearchContainer
        dataHandler={loadData}
        mainPage={false}
        searchQuery={props.searchQuery}
      />
      <DiscoverCollectionTitle />
      <DiscoverCollections />
    </MainLayout>
  );
};
export default Collections;
