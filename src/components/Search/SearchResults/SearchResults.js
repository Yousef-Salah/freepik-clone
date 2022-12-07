import React, { useState, useEffect } from 'react';

import './search-results.scss';
import FinalImages from '../../../utils/FinalImages.json';
const SearchResults = (props) => {
    // const [images, setImages] = useState(FinalImages);
    // const [filteredImages, setFilteredImages] = useState([]);

    // useEffect(() => {
    //     // console.log(images);

    //     let _filteredImages = images.filter(image => image.title.toLowerCase().includes('background'));

    //     setFilteredImages(_filteredImages);
    // }, [])


    // useEffect(() => {
    //     console.log(filteredImages);

    // }, [filteredImages])

    console.log("from component")
    console.log(props.data[1])


    return (
        <div>
            {props.data.map(item => {
                return (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <h5>{item.category}</h5>
                        <img src={item.img_thumb} alt={item.title + "-thumb"} />
                        <br />
                        {/* <img src={item.img_og} alt={item.title} /> */}
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults