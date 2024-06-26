import React, { useState, useEffect, useContext } from "react";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import { SideBarData1 } from "../components/Search/FilterSideBar/SideBarData1";
import { useLocation, useParams } from "react-router";
import SearchTagBarData from "../utils/SearchTagBarData";
import MainLayout from "../components/Layouts/MainLayout";
import SearchQuery from "../context/SearchQuery";
import ResultsDataContainer from "../context/ResultsDataContainer";
import SponsoredBy from "../components/Layouts/SponsoredBy/SponsoredBy";
import ModalTrigger from "../components/Category/PreviewModal/ModalTrigger";

const Search = (props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  };
  const [data, setData] = useState([]);
  const [partialData, setPartialData] = useState([]);
  const [spinnerTrigger, setSpinnerTrigger] = useState(true);
  const [contentState, setContentState] = useState(true);
  const searchQuery = useContext(SearchQuery);
  const itemId = useParams().itemId;
  const resultsDataContainer = useContext(ResultsDataContainer);
  const [modalDisplay, setModalDisplay] = useState(false);
	const [modalData, setModalData] = useState({});
	const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    props.page("search");
    props.newQuery(location);
    if(!itemId && data.length == 0) {
        loadData();
    }
  }, [location, resultsDataContainer]);

  const toggleModal = () => {
		setModalDisplay(!modalDisplay);
	};

	const modalHandler = (item) => {
		setModalData(item);
		toggleModal();
	};


  const loadData = () => {

    if(searchQuery.current.searchInput !== resultsDataContainer.lastQuery) {
      resultsDataContainer.lastQuery = searchQuery.current.searchInput;
      resultsDataContainer.data = props.dataFilter.getData(searchQuery.current);
      resultsDataContainer.start = 0;
      resultsDataContainer.end = 15;

      setPartialData(resultsDataContainer.data.slice(0,15));
      setContentState(false);
      setSpinnerTrigger(true);
      setTimeout(() => {
        setSpinnerTrigger(false);
        setContentState(true);
      }, 1500);
      (() => setLoaded(true))();
    }
    // setData(props.dataFilter.getData(searchQuery.current));    
  };

  const nextButtonHandler = () => {
    resultsDataContainer.start += resultsDataContainer.offset;
    resultsDataContainer.end += resultsDataContainer.offset;
    setPartialData(resultsDataContainer.data.slice(resultsDataContainer.start, resultsDataContainer.end));
  }

  const previousButtonHandler = () => {
    resultsDataContainer.start -= resultsDataContainer.offset;
    resultsDataContainer.end -= resultsDataContainer.offset;
    setPartialData(resultsDataContainer.data.slice(resultsDataContainer.start, resultsDataContainer.end));
  }

  return (
    <MainLayout page={props.page} pageTitle="Search">
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
			
      <SearchContainer
        dataHandler={loadData}
        mainPage={false}
      />
      <SponsoredBy images={data.slice(data.length - 10, data.length - 1)} />

      <SideBar updateOpen={updateOpen} data={SideBarData1} />
      <div className={`search-content ${!open ? "base" : "pushed"}`}>
        <TagBar
          data={SearchTagBarData}
          className={`${!open ? "base" : "pushed-tagbar"}`}
        />
        <SearchResults
          images={partialData}
          visible={contentState}
          modalLift={modalHandler}
          title={location.pathname
            .split("/")[2]
            .replace("%20", " ")
            .replace("-", " ")
            .replace("_", " ")}
        />
        <Spinner visible={spinnerTrigger} />
      </div>
      <button onClick={previousButtonHandler}>Previous</button>

      <button onClick={nextButtonHandler}>Next</button>
    </MainLayout>
	);
};

export default Search;
