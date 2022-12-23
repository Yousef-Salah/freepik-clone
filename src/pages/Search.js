import React, { useState, useEffect } from "react";
import SponsoredSection from "../components/Common/SponsorSection/SponsorSection";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import { useCookies } from "react-cookie";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import '../app.css';
import { useLocation } from "react-router-dom";

const Search = (props) => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const [asideOpen, setAsideOpen] = useState(false);
	const [ModalTriggered, setModalTriggered] = useState(false);
	const updateOpenYes = () => {
		setAsideOpen(false);
	}
	const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
	const [data, setData] = useState([]);
	const [spinnerTrigger, setSpinnerTrigger] = useState(true);
	const [contentState, setContentState] = useState(true);

	useEffect(() => {
		props.page("search");
	}, [spinnerTrigger, props.data]);

	useEffect(() => {
		props.newQuery(location);
		console.log("did it")
	}, [location]);

	const loadData = () => {
		setData(props.dataFilter.getData(props.searchQuery));
		setContentState(false);
		setSpinnerTrigger(true);
		setTimeout(() => {
			setSpinnerTrigger(false);
			setContentState(true);
		}, 1500);
	};

	const toggleSideTrue = () => {
		setAsideOpen(true);
		console.log("toggledz!")

	}
	const toggleBack = () => {
		setModalTriggered(true);
		setAsideOpen(false);
	}

	return (

		<>
			<SearchContainer dataHandler={loadData} mainPage={false} setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
			<SponsoredSection />
			<div className='search-main-cont'>
				<div className={ModalTriggered ? ("aside-dissapear") : (asideOpen ? "aside-cont-show" : "aside-cont-hide")} onClick={toggleSideTrue}>
					<SideBar updateOpen={updateOpenYes} />
				</div>

				<div className={asideOpen ? "results-cont-small" : "results-cont-big"} >
					<TagBar />
					<SearchResults images={data} title={location.pathname.split("/")[2].replace("%20", " ")} modalStatus={toggleBack} visible={contentState}
					// closedStatus={toggleBackBack}
					/>
					<Spinner visible={spinnerTrigger} />
				</div>
			</div>
		</>
	);
};

export default Search;
