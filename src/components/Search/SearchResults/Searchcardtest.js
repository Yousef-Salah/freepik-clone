import React, { useState, useEffect } from "react";

import "./search-results.scss";
// import FinalImages from "../../../utils/FinalImages.json";
import Searchimgcard from "./Searchimgcard";
import ModalTrigger from "../../Category/PreviewModal/ModalTrigger";

const SearchResults1 = (props) => {
	//static data & filter
	// const [images, setImages] = useState(FinalImages);
	const [filteredImages, setFilteredImages] = useState([]);

	// for modal
	const [modalDisplay, setModalDisplay] = useState(false);
	const [modalData, setModalData] = useState({});
	const [loaded, setLoaded] = useState(false);

	//static useEffect
	useEffect(() => {
		console.log(images);

		let _filteredImages = images.filter((image) =>
			image.title.toLowerCase().includes("background")
		);

		setFilteredImages(_filteredImages);
	}, []);
	useEffect(() => {
		console.log(filteredImages);
		setLoaded(true);
	}, [filteredImages]);
	// end static useEffect


	useEffect(() => {
		setLoaded(true);
		setFilteredImages(props.images)
	}, [props.images])

	const toggleModal = () => {
		// props.modalStatus(!modalDisplay);
		setModalDisplay(!modalDisplay);
		console.log(!modalDisplay)
	}


	const modalHandler = (item) => {
		setModalData(item)
		toggleModal();
	}

	return (
		<section className="container-fluid" id="SearchCard">
			{loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
			<div className="grid">
				<div className="row">
					{filteredImages.map((item) => {
						return (
							<div className="col-3" onClick={() => modalHandler(item)}>
								<Searchimgcard Cardphoto={item} />
							</div>
						)
					})}
				</div>
			</div>
		</section>
	);
};
export default SearchResults1;
