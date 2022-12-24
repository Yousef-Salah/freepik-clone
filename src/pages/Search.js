import React, { useState, useEffect } from "react";
import SearchResults from "../components/Search/SearchResults/SearchResults";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import Spinner from "../components/Search/LoadingSpinner/Spinner";
import SearchResults1 from '../components/Search/SearchResults/Searchcardtest';
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import { SideBarData1 } from "../components/Search/FilterSideBar/SideBarData1";
import { useLocation } from "react-router";
import SearchTagBarData from "../utils/SearchTagBarData";
const Search = (props) => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	// const [asideOpen, setAsideOpen] = useState(false);
	// const [ModalTriggered, setModalTriggered] = useState(false);
	const updateOpen = (value) => {
		setOpen(value);
	}
	const [data, setData] = useState([]);
	const [spinnerTrigger, setSpinnerTrigger] = useState(true);
	const [contentState, setContentState] = useState(true);

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
	};

	return (
		<>
			<SearchContainer dataHandler={loadData} mainPage={false} searchQuery={props.searchQuery} />
			<SideBar updateOpen={updateOpen} data={SideBarData1} />
			<div className={`search-content ${!open ? "base" : "pushed"
				}`} >
				<TagBar data={SearchTagBarData} className={`${!open ? "base" : "pushed-tagbar"
					}`} />
				<SearchResults images={data} visible={contentState} title={location.pathname.split("/")[2].replace("%20", " ").replace("-", " ")}
				/>
				<Spinner visible={spinnerTrigger} />
			</div >
		</>
	);
};

export default Search;
