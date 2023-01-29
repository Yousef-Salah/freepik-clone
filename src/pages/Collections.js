import React, { useState, useEffect } from "react";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import MainLayout from "../components/Layouts/MainLayout";
import Collection from "../components/Collection/Collection";

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
    
    <MainLayout page={props.page} pageTitle="Collections">
      <SearchContainer
        dataHandler={loadData}
        mainPage={false}
        searchQuery={props.searchQuery}
      />

      <Collection />
    </MainLayout>
  );
};
export default Collections;
