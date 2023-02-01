import React, { useState, useEffect } from "react";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import { SideBarData1 } from "../components/Search/FilterSideBar/SideBarData1";
import { useLocation } from "react-router";
import SearchTagBarData from "../utils/SearchTagBarData";
import MainLayout from "../components/Layouts/MainLayout";
import SponsoredBy from "../components/Layouts/SponsoredBy/SponsoredBy";
import ModalTrigger from "../components/Category/PreviewModal/ModalTrigger";

const Search = (props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  };
  const [data, setData] = useState([]);
  const [spinnerTrigger, setSpinnerTrigger] = useState(true);
  const [contentState, setContentState] = useState(true);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const toggleModal = () => {
    setModalDisplay(!modalDisplay);
  };

  const modalHandler = (item) => {
    setModalData(item);
    toggleModal();
  };

  useEffect(() => {
    props.page("search");
    props.newQuery(location);
  }, [spinnerTrigger, location]);

  const loadData = () => {
    setData(props.dataFilter.getData(props.searchQuery.current));
    setContentState(false);
    setSpinnerTrigger(true);
    setTimeout(() => {
      setSpinnerTrigger(false);
      setContentState(true);
    }, 1500);
    (() => setLoaded(true))();
  };

  return (
    <MainLayout page={props.page} pageTitle="Search">
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
      <SearchContainer
        dataHandler={loadData}
        mainPage={false}
        searchQuery={props.searchQuery}
      />
      <SponsoredBy images={data.slice(data.length - 8, data.length - 1)} />
      <SideBar updateOpen={updateOpen} data={SideBarData1} />
      <div className={`search-content ${!open ? "base" : "pushed"}`}>
        <TagBar
          data={SearchTagBarData}
          className={`${!open ? "base" : "pushed-tagbar"}`}
        />
        <SearchResults
          images={data}
          visible={contentState}
          modalLift={modalHandler}
          title={location.pathname
            .split("/")[2]
            .replace("%20", " ")
            .replace("-", " ")}
        />
        <Spinner visible={spinnerTrigger} />
      </div>
    </MainLayout>
  );
};

export default Search;

// useEffect(() => {
//   setLoaded(true);
// }, [props.images]);

