import React, { useState, useEffect } from 'react';
import ImagesData from '../../../utils/Images-data.json';
// import DataBoi from '../../../utils/DataBoi';
const SearchResults = () => {
    // let data = DataBoi();
    // console.log(data);
    const [images, setImages] = useState(ImagesData);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        console.log(images);
        let _filteredImages = images.filter(image => Date.parse(image.publish_date) > Date.parse('10-10-2017'));
        // let _filteredImages = images.filter(image => image.title.toLowerCase().includes('logo'));
        // let _filteredImages = images.filter(image => image.title..toLowerCase().includes('water'));
        // let _filteredImages = images.filter(image => image.age === true);
        // let _filteredImages = images.filter(image => image.age.toLowerCase() === "child");
        setFilteredImages(_filteredImages);
    }, [images])

    useEffect(() => {
        console.log(filteredImages);
    }, [filteredImages])

    return (
        <></>
    )
}

export default SearchResults