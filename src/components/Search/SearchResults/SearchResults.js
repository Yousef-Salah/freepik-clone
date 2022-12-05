import React, { useState, useEffect } from 'react';

import './search-results.scss';
import FinalImages from '../../../utils/FinalImages.json';
import ModalTrigger from '../../Category/PreviewModal/ModalTrigger';
const SearchResults = () => {
	const [images, setImages] = useState(FinalImages);
	const [filteredImages, setFilteredImages] = useState([]);
	const [modalDisplay, setModalDisplay] = useState(false);
	const [modalData, setModalData] = useState({});
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		console.log(images);

		let _filteredImages = images.filter(image => image.title.toLowerCase().includes('background'));

		setFilteredImages(_filteredImages);
	}, [])


	useEffect(() => {
		console.log(filteredImages);
		setLoaded(true);
	}, [filteredImages])

	const toggleModal = () => {
		setModalDisplay(!modalDisplay);
		console.log("changed!")
		console.log(modalDisplay);
	}
	const modalHandler = (item) => {
		console.log("modalHandler");
		setModalData(item)
	}
	return (
		<div>
			{/* only for testing data*/}
			<ModalTrigger displayStatus={modalDisplay} data={modalData} />
			{loaded && filteredImages.map(item => {
				return (
					<>
						<div key={item.id} onClick={() => modalHandler(item)}>
							<h4>{item.title}</h4>
							<h5>{item.category}</h5>
							<div onClick={toggleModal}>
								<img src={item.img_thumb} alt={item.title + "-thumb"} />
							</div>
							<br />
							<img src={item.img_og} alt={item.title} />
						</div>
					</>
				)
			})}
		</div>
	)
}

export default SearchResults