import React, { useState, useEffect } from 'react';

import "./search-results.scss";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "../FilterSideBar/SearchResultHeader"
import ModalTrigger from "../../Category/PreviewModal/ModalTrigger";

const SearchResults = (props) => {

	const [modalDisplay, setModalDisplay] = useState(false);
	const [modalData, setModalData] = useState({});
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
		console.log("lol")
	}, [props.images])

	const toggleModal = () => {
		setModalDisplay(!modalDisplay);
		console.log("changed!")
		console.log(modalDisplay);
	}

	const modalHandler = (item) => {
		console.log("modalHandler");
		setModalData(item)
		toggleModal();
	}

	return (
		<>
			{loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
			<SearchResultHeader title="Free Vectores" sort='True' />
			<div id="search-results-content" className="d-none">
				{props.images.map((item) => {
					return (
						<div onClick={() => modalHandler(item)} >
							<Searchimgcard Cardphoto={item} />;
						</div>
					)
				})}
			</div>
		</>
	);
};

export default SearchResults;
