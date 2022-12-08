import React, { useState, useEffect } from 'react';

import './search-results.scss';
import FinalImages from '../../../utils/FinalImages.json';
import Searchimgcard from './Searchimgcard';
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

    return (
        <div>
            {/* only for testing data*/}
            {filteredImages.map(item => {
                return (
                        <Searchimgcard Cardphoto={item} />
                )
            })}
        </div>
    )
}

export default SearchResults