import React, { useState, useEffect } from 'react';
import './search-results.scss';
import FinalImages from '../../../utils/FinalImages.json';
// import DataGenerator from '../../../utils/DataGenerator';
const SearchResults = () => {
    // let data = DataGenerator();
    const [images, setImages] = useState(FinalImages);
    const [filteredImages, setFilteredImages] = useState([]);
    // console.log(images);

    useEffect(() => {
        // console.log(images);
        // let _filteredImages = images.filter(image => Date.parse(image.publish_date) > Date.parse('10-10-2021'));
        let _filteredImages = images.filter(image => image.title.toLowerCase().includes('drawing'));
        // let _filteredImages = images.filter(image => image.title.toLowerCase().includes('water'));
        // let _filteredImages = images.filter(image => image.age === true);
        // let _filteredImages = images.filter(image => image.age.toLowerCase() === "child");

        // //* map imgDataSet to images
        // let _filteredImages2 = imgDataSet.map(image => {
        //     let _imgDataSet = images.find(img => img.id === image.id);
        //     return { ...image, ..._imgDataSet };
        // });
        setFilteredImages(_filteredImages);
    }, [])


    useEffect(() => {
        console.log(filteredImages);

    }, [filteredImages])

    return (
        <div className="xyz">
            {filteredImages.map(item => {
                return (
                    <div class="test-123" key={item.id}>
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